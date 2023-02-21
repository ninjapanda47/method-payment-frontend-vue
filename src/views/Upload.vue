<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card width="400" class="mx-auto mt-10">
          <v-card-title class="text-center mt-5"
          >Batch Submission Form
          </v-card-title
          >
          <v-card-text class="my-4 text-center">
            <v-form class="mx-5 text-left">
              <v-text-field label="BatchId" v-model="batchId"></v-text-field>
              <v-file-input accept="xml/*" label="File input" ref="file" v-on:change="handleFileUpload($event)"
                            type="file"></v-file-input>
            </v-form>
            <v-btn color="primary" class="mx-auto text-center" @click="upload"> Submit</v-btn>
          </v-card-text>
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
  },
  data() {
    return {
      file: {} as File,
      batchId: ''
    };
  },
  methods: {
    handleFileUpload($event: Event) {
      const target = $event.target as HTMLInputElement;
      if (target && target.files) {
        this.file = target.files[0]
      }

    },
    async upload() {
      if (this.file) {
        await this.appStore.uploadPayments(this.batchId, this.file);
        this.$router.push({name: 'Batch', params: {batchId: this.appStore.batch?.batchId}})
      }
    },
  },
});
</script>
