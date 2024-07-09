<template>
  <component
    :is="tag"
    :ref="
      /* There should be an error on the line below */
      (ref: HTMLElement | null) => {
        elementRef = ref;
      }
    "
  />
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    tag: {
      type: String as PropType<'div' | 'span'>,
      required: true,
    },
  },
  setup() {
    const elementRef = ref<HTMLElement | null>();

    return {
      elementRef,
    };
  },
});
</script>
