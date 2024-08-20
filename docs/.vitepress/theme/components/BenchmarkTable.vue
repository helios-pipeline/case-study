<template>
  <table class="benchmark-table">
    <thead>
      <tr>
        <th class="query-col"></th>
        <th v-for="db in databases" :key="db">{{ db }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="metadata-row">
        <td>Load time</td>
        <td v-for="db in databases" :key="db" :class="getColorClass('Load time', db)">
          {{ benchmarkData['Load time'][db] }}
        </td>
      </tr>
      <tr class="metadata-row">
        <td>Data size</td>
        <td v-for="db in databases" :key="db" :class="getColorClass('Data size', db)">
          <template v-if="benchmarkData['Data size'][db] === '-'">
             <FontAwesomeIcon :icon="['fas', 'skull-crossbones']" class="unavailable-icon" />
          </template>
          <template v-else>
            {{ benchmarkData['Data size'][db] }}
          </template>
        </td>
      </tr>
      <tr v-for="(query, index) in queries" :key="index" class="query-row">
        <td class="query-cell">
          <button @click="showQueryModal(index)" class="view-query-btn">
            Query {{ index + 1}}
          </button>
        </td>
        <td v-for="db in databases" :key="db" :class="getColorClass(`Q${index + 1}.`, db)">
          <template v-if="benchmarkData[`Q${index + 1}.`][db] === '-'">
             <FontAwesomeIcon :icon="['fas', 'skull-crossbones']" class="unavailable-icon" />
          </template>
          <template v-else>
            {{ benchmarkData[`Q${index + 1}.`][db] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>

  <teleport to="body">
    <div v-if="showModal" class="modal-backdrop" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">&times;</button>
        <h3>{{ selectedQuery.question }}</h3>
        <!-- <pre><code>{{ selectedQuery.text }}</code></pre> -->
        <pre><code class="language-sql" v-html="highlightedSQL"></code></pre>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism.css';
library.add(faSkullCrossbones)

export default {
  components: {
    FontAwesomeIcon
  },
  setup() {
    const databases = ref(['ClickHouse', 'Pinot', 'Elasticsearch', 'MongoDB', 'PostgreSQL']);
    const queries = ref([
      {
        question: "How many page views were driven by advertising?",
        text: 'SELECT COUNT(*) FROM hits WHERE AdvEngineID <> 0;'
      },
      {
        question: "What's the total ad impact, page view count, and average screen width?",
        text: 'SELECT SUM(AdvEngineID), COUNT(*), AVG(ResolutionWidth) FROM hits;'
      },
      {
        question: "How many unique users visited the site?",
        text: 'SELECT COUNT(DISTINCT UserID) FROM hits;'
      },
      {
        question: "What are the top 10 regions by unique user count?",
        text: 'SELECT RegionID, COUNT(DISTINCT UserID) AS u FROM hits GROUP BY RegionID ORDER BY u DESC LIMIT 10;'
      },
      {
        question: "What are the top 10 search phrases leading to Google-related URLs?",
        text: 'SELECT SearchPhrase, MIN(URL), COUNT(*) AS c FROM hits WHERE URL LIKE \'%google%\' AND SearchPhrase <> \'\' GROUP BY SearchPhrase ORDER BY c DESC LIMIT 10;'
      }
    ]);

    const benchmarkData = reactive({
      'Load time': {
        'ClickHouse': '494s',
        'Pinot': '2032s',
        'Elasticsearch': '10072s',
        'MongoDB': '44824s',
        'PostgreSQL': '2342s'
      },
      'Data size': {
        'ClickHouse': '13.48 GiB',
        'Pinot': '-',
        'Elasticsearch': '71.37 GiB',
        'MongoDB': '80.46 GiB',
        'PostgreSQL': '72.45 GiB'
      },
      'Q1.': {
        'ClickHouse': '0.007s',
        'Pinot': '0.185s',
        'Elasticsearch': '1.667s',
        'MongoDB': '0.398s',
        'PostgreSQL': '254.238s'
      },
      'Q2.': {
        'ClickHouse': '0.020s',
        'Pinot': '0.258s',
        'Elasticsearch': '13.991s',
        'MongoDB': '115.775s',
        'PostgreSQL': '263.072s'
      },
      'Q3.': {
        'ClickHouse': '0.339s',
        'Pinot': '3.633s',
        'Elasticsearch': '4.413s',
        'MongoDB': '25.618s',
        'PostgreSQL': '42.334s'
      },
      'Q4.': {
        'ClickHouse': '0.490s',
        'Pinot': '2.902s',
        'Elasticsearch': '16.050s',
        'MongoDB': '377.012s',
        'PostgreSQL': '321.918s'
      },
      'Q5.': {
        'ClickHouse': '0.622s',
        'Pinot': '-',
        'Elasticsearch': '16.459s',
        'MongoDB': '20.130s',
        'PostgreSQL': '267.690s'
      }
    });

    const showModal = ref(false);
    const selectedQuery = ref(null);

    const getColorClass = (rowKey, db) => {
      const value = benchmarkData[rowKey]?.[db];
      if (value === '-' || value === '' || value === undefined) return 'unavailable';

      const numValue = parseFloat(value);
      if (isNaN(numValue)) return 'unavailable';

      const rowValues = Object.values(benchmarkData[rowKey] || {});
      const validValues = rowValues.map(v => parseFloat(v)).filter(v => !isNaN(v));
      const minValue = Math.min(...validValues);

      if (numValue === minValue) return 'best';

      const multiple = numValue / minValue;

      if (multiple < 2) return 'best';
      if (multiple < 10) return 'good';
      if (multiple < 50) return 'average';
      if (multiple < 250) return 'below-average';
      return 'poor';
    };

    const showQueryModal = (index) => {
      selectedQuery.value = queries.value[index];
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    const highlightedSQL = computed(() => {
      if (selectedQuery.value) {
        return Prism.highlight(selectedQuery.value.text, Prism.languages.sql, 'sql');
      }
      return '';
    });

    return {
      databases,
      queries,
      benchmarkData,
      showModal,
      selectedQuery,
      getColorClass,
      showQueryModal,
      closeModal,
      highlightedSQL
    };
  }
};
</script>

<style scoped>

.benchmark-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.benchmark-table th,
.benchmark-table td {
  padding: 12px;
  text-align: center;
  /* border: 1px solid #e5e7eb; */
  border: none;
}

.benchmark-table th:first-child,
.benchmark-table td:first-child {
  width: 15%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.benchmark-table th:not(:first-child),
.benchmark-table td:not(:first-child) {
  width: 17%;
}

.benchmark-table th {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  /* background-color: #f3f4f6; */
  background-color: #e2e8f0;
  color: #1f2937;
  font-weight: 600;
}

.benchmark-table th:last-child {
  border-right: none;
}


.question-col, .query-col {
  width: 15%;
}

.metadata-row td:first-child {
  font-weight: 600;
  text-align: left;
}

.query-row:nth-child(even) {
  background-color: #f9fafb;
}

.question-cell, .query-cell {
  text-align: left;
}

.view-query-btn {
  background-color: rgba(139, 92, 246, 0.8);
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  width: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.view-query-btn:hover {
  background-color: rgba(124, 58, 237, 0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.best { background-color: rgba(16, 185, 129, 0.6); }
.good { background-color: rgba(245, 158, 11, 0.6); }
.average { background-color: rgba(249, 115, 22, 0.6); }
.below-average { background-color: rgba(239, 68, 68, 0.6); }
.poor { background-color: rgba(220, 38, 38, 0.6); }
.unavailable {
  background-color: rgba(17, 24, 39, 0.7);
}

.unavailable-icon {
  color: #ef4444;
  font-weight: bold;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

pre {
  background-color: #f3f4f6;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}

code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
}

/* Prism.js theme overrides */
:deep(.token.keyword) { color: #0000ff; }
:deep(.token.function) { color: #ff00ff; }
:deep(.token.number) { color: #009999; }
:deep(.token.operator) { color: #9a6e3a; }
:deep(.token.punctuation) { color: #666666; }

@media (max-width: 768px) {
  .benchmark-table {
    font-size: 12px;
  }

  .benchmark-table th,
  .benchmark-table td {
    padding: 8px;
  }

  .view-query-btn {
    font-size: 10px;
    padding: 2px 4px;
  }
}
</style>
