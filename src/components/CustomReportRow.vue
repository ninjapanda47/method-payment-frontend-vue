<template>
  <tr>
    <td>
      {{ batch.batchId }}
    </td>

  </tr>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useAppStore} from "@/store/app";

export default defineComponent({
  setup() {
    const appStore = useAppStore();

  },
  props: {
    batch: Object
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
});
</script>
<style>
</style>
