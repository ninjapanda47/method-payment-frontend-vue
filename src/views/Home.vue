<template>
  <v-container>
    <v-row>
      <v-col>
        <v-banner
          lines="two"
          icon="mdi-human-greeting"
          color="info"
          class="my-4 mx-auto"
          width="75%"
        >
          <v-banner-text>
            Welcome to Method Payment Dashboard. Click on add to start processing payments.
          </v-banner-text>

          <template v-slot:actions>
            <v-btn
              prepend-icon="mdi-plus"
              class="mt-1"
              @click="this.$router.push('upload')"
            >Add
            </v-btn
            >
          </template>
        </v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>

</script>
