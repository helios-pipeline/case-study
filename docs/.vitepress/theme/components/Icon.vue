<template>
  <component :is="iconComponent" v-if="isHeroicon" class="icon" />
  <CustomIcon v-else :name="name" class="icon" />
</template>

<script setup>
import { computed } from 'vue'
import * as OutlineIcons from '@heroicons/vue/24/outline'
import CustomIcon from './CustomIcon.vue'
import { customIcons } from './customIcons.js'

const props = defineProps(['name'])

const isHeroicon = computed(() => props.name in OutlineIcons)
const isCustomIcon = computed(() => props.name in customIcons)
const iconComponent = computed(() => isHeroicon.value ? OutlineIcons[props.name] : null)
</script>

<style scoped>
/* .icon { */
/*   display: inline-block; */
/*   width: 1.6em; */
/*   height: 1.6em; */
/*   vertical-align: middle; */
/* } */
.icon {
  display: block;
  width: 1.6em;
  height: 1.6em;
}
</style>
