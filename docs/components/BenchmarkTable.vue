<template>
  <table class="benchmark-table">
    <thead>
      <tr>
        <th></th>
        <th v-for="db in databases" :key="db">{{ db }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Load time</th>
        <td v-for="db in databases" :key="db"
            :class="getColorClass('Load time', db)">
          {{ benchmarkData['Load time'][db] }}
        </td>
      </tr>
      <tr>
        <th>Data size</th>
        <td v-for="db in databases" :key="db"
            :class="getColorClass('Data size', db)">
          <template v-if="benchmarkData['Data size'][db] === '-'">
            <FontAwesomeIcon :icon="['fas', 'skull-crossbones']" />
          </template>
          <template v-else>
            {{ benchmarkData['Data size'][db] }}
          </template>

        </td>
      </tr>
      <tr v-for="(query, index) in queries" :key="index">
        <th class="query-cell">
          <span :title="query">{{ query }}</span>
        </th>
        <td v-for="db in databases" :key="db"
            :class="getColorClass(`Q${index + 1}.`, db)">
          <template v-if="benchmarkData[`Q${index + 1}.`][db] === '-'">
            <FontAwesomeIcon :icon="['fas', 'skull-crossbones']" />
          </template>
          <template v-else>
            {{ benchmarkData[`Q${index + 1}.`][db] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faSkullCrossbones)

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      databases: ['ClickHouse', 'Pinot', 'Elasticsearch', 'MongoDB', 'PostgreSQL'],
      queries: [
        'SELECT COUNT(*) FROM hits WHERE AdvEngineID <> 0;',
        'SELECT SUM(AdvEngineID), COUNT(*), AVG(ResolutionWidth) FROM hits;',
        'SELECT COUNT(DISTINCT UserID) FROM hits;',
        'SELECT RegionID, COUNT(DISTINCT UserID) AS u FROM hits GROUP BY RegionID ORDER BY u DESC LIMIT 10;',
        'SELECT SearchPhrase, MIN(URL), COUNT(*) AS c FROM hits WHERE URL LIKE \'%google%\' AND SearchPhrase <> \'\' GROUP BY SearchPhrase ORDER BY c DESC LIMIT 10;'
      ],
      benchmarkData: {
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
      }
    }
  },
  methods: {
    // NOTE: ClickHouse table bases colors on the multiple from whatever is fastest query in the row
    // this makes sense as what is impressive for one query is different than another
    getColorClass(rowKey, db) {
      const value = this.benchmarkData[rowKey]?.[db]
      if (value === '-' || value === '' || value === undefined) return 'unavailable'

      const numValue = parseFloat(value)
      if (isNaN(numValue)) return 'unavailable'

      const rowValues = Object.values(this.benchmarkData[rowKey] || {})
      const validValues = rowValues.map(v => parseFloat(v)).filter(v => !isNaN(v))
      const minValue = Math.min(...validValues)

      if (numValue === minValue) return 'best'

      const multiple = numValue / minValue
      console.log(rowKey, numValue, minValue, multiple)

      if (multiple < 20) return 'good'
      if (multiple < 100) return 'average'
      if (multiple < 500) return 'below-average'
      return 'poor'
    },
    shortenQuery(query) {
      return query.length > 30 ? query.substring(0, 27) + '...' : query
    }
  }
}
</script>

<style scoped>
th, td {
  background-color: #fef3c7; /* tailwindcss amber 100 */
}

.benchmark-table {
  border-collapse: collapse;
  width: 100%;
}
.benchmark-table th, .benchmark-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.benchmark-table th:not(:first-child),
.benchmark-table td:not(:first-child) {
  width: 150px;
  /* doesnt appear to be working */
}

.best { background-color: hsla(142, 76%, 36%, 0.6); } /* tailwindcss green 600 */
.good { background-color: hsla(48, 96%, 53%, 0.6); } /* tailwindcss yellow 400 */
.average { background-color: hsla(24, 95%, 47%, 0.6); } /* tailwindcss orange 600 */
.below-average { background-color: hsla(0, 84%, 60%, 0.6); } /* tailwindcss red 500 */
.poor { background-color: hsla(0, 74%, 42%, 0.6); } /* tailwindcss red 700 */
.unavailable { background-color: hsla(24, 5%, 64%, 1); } /* tailwindcss stone 400 */

.query-cell {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.query-cell span {
  max-width: 200px;
  max-height: 45px;
  display: inline-block;
  max-width: 100%;
  text-wrap: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.query-cell span:hover {
  /* position: absolute; */
  white-space: normal;
  /* word-break: break-all; */
  overflow: visible;
  z-index: 1;
  /* background-color: white; */
  /* box-shadow: 0 0 5px rgba(0,0,0,0.3); */
  max-width: none;
  width: auto;
}
</style>
