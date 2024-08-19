<template>
  <tippy :content="content">
    <span class="tippy-trigger"><slot></slot></span>
  </tippy>
</template>

<script>
export default {
  props: ['content']
}
</script>
