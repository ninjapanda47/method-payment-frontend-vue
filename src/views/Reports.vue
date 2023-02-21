<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto"
        >
          <v-table>
            <thead>
            <tr>
              <th class="text-left">
                BatchId
              </th>
              <th>
                Total Amount By Source Account
              </th>
              <th>
                Total Amount By Branch
              </th>
              <th>
                Total Payments
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="item in appStore.batchList"
              :key="item._id"
            >
              <td>
                {{ item.batchId }}
              </td>
              <td>
                <a
                  :href="createGetAmountBySourceAccountLink(item.batchId)" target="_blank">
                  Report
                </a>
              </td>
              <td>
                <a
                  :href="createGetAmountByBranchLink(item.batchId)" target="_blank">
                  Report
                </a>
              </td>
              <td>
                <a
                  :href="createGetTotalPaymentLink(item.batchId)" target="_blank">
                  Report
                </a>
              </td>
            </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useAppStore} from "@/store/app";

export default defineComponent({
  setup() {
    const appStore = useAppStore();
    return {appStore};
  },
  components: {},
  async mounted() {
    await this.appStore.getAndSetBatchList()
  },
  data() {
    return {};
  },
  methods: {
    createGetAmountBySourceAccountLink(batchId: string) {
      return `http://localhost:2000/report/total-amount-by-source-account/${batchId}`
    },
    createGetAmountByBranchLink(batchId: string) {
      return `http://localhost:2000/report/total-amount-by-branch/${batchId}`
    },
    createGetTotalPaymentLink(batchId: string) {
      return `http://localhost:2000/report/payments/${batchId}`
    }
  },
});
</script>
