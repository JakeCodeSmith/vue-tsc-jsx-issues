<template>
  <Example />
  <Example2 tag="div" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Example from './Example.vue';
import Example2 from './Example2.vue';

export default defineComponent({
  components: {
    Example,
    Example2,
  },
});
</script>
