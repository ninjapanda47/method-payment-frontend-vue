<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card width="400" class="mx-auto mt-10" variant="outlined">
          <v-card-title class="text-center mt-5"
          >Batch Name: {{ appStore.batch.batchId }}
          </v-card-title
          >
          <v-card-item>
            <div>
              <div class="text-subtitle-1 text-center mb-5">
                Process <b>{{ appStore.paymentsToProcess }}</b> payments from
                <b>{{ appStore.sourceAccounts }}</b> source accounts.
              </div>
            </div>
            <div class="text-center mb-2">
              <v-tooltip
                text="Authorize payments for processing"
                location="bottom"
              >
                <template v-slot:activator="{ props }">
                  <v-btn class="mr-2" color="primary" v-bind="props" @click="submit">
                    Submit
                  </v-btn>
                </template>
              </v-tooltip>
              <v-tooltip
                text="Discard batch.  Payments will be removed."
                location="bottom"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="error"
                    v-bind="props"
                    @click="cancel"
                  >
                    cancel
                  </v-btn>
                </template>
              </v-tooltip>
            </div>
          </v-card-item>
        </v-card>
        <v-dialog v-model="showDialog" width="400">
          <v-card>
            <v-card-text class="text-center">
              {{ customMessage }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="close"
              >Close
              </v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useAppStore} from "@/store/app";
import * as batchService from "@/services/batchService";
import {processBatch} from "@/services/batchService";

export default defineComponent({
  setup() {
    const appStore = useAppStore();
    return {appStore};
  },
  components: {},
  async mounted() {
  },
  data() {
    return {
      deletedCount: 0,
      paymentProcessedCount: 0,
      showDialog: false,
      customMessage:
        "You have discarded batch name and 10 payments were removed.",
    };
  },
  methods: {
    async submit() {
      if (this.appStore.batch) {
        const response = await batchService.processBatch(this.appStore.batch)
        this.paymentProcessedCount = response.paymentProcessedCount
        this.customMessage = `You have processed batch ${this.appStore.batch.batchId} and ${this.paymentProcessedCount} payments were submitted.`
        this.showDialog = true
      }

    },

    async cancel() {
      if (this.appStore.batch?.batchId) {
        const response = await batchService.discardBatch(
          this.appStore.batch.batchId
        );
        this.deletedCount = response.deletedCount;
        this.customMessage = `You have discarded batch ${this.appStore.batch.batchId} and ${this.deletedCount} payments were removed.`;
        this.showDialog = true
      }
    },
    close() {
      this.showDialog = false
      this.appStore.clearBatchData()
      this.$router.push({name: 'Home'})
    }
  },
});
</script>
