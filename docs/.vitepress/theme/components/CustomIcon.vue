<template>
  <img v-if="iconSrc" :src="iconSrc" :alt="name" class="custom-icon" />
  <span v-else class="icon-placeholder">?</span>
</template>

<script setup>
import { computed } from 'vue'
import { customIcons } from './customIcons.js'

const props = defineProps(['name'])

const iconSrc = computed(() => customIcons[props.name] || null)
</script>

<style scoped>
.custom-icon {
  display: inline-block;
  width: 1.6em;
  height: 1.6em;
  vertical-align: middle;
}
.icon-placeholder {
  display: inline-block;
  width: 1.6em;
  height: 1.6em;
  vertical-align: middle;
  text-align: center;
  line-height: 1.6em;
  background-color: #ccc;
  color: #fff;
  font-weight: bold;
}
</style>
