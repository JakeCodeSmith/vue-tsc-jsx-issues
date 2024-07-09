<template>
  <div>
    <!-- There should _not_ be an error on the line below-->
    <button @click="onClick" class="red">Increment</button>
    <!-- @vue-ignore Proves the issue is with vue and not typescript itself (@tsignore does not silence the error) -->
    <button @click="onClick">Increment</button>
    <div>
      {{ count }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);

    const onClick = (event: Event) => {
      event.preventDefault();
      count.value++;
    };

    return {
      count,
      onClick,
    };
  },
});
</script>

<style scoped>
.red {
  color: red;
}
</style>
