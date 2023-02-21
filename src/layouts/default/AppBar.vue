<template>
  <v-app-bar color="#002626">
    <v-app-bar-title @click="this.$router.push({name: 'Home'})">
      <v-img src="@/assets/logo.png" height="32" width="130"/>
    </v-app-bar-title>
    <v-btn
      prepend-icon="mdi-file-chart"
      color="secondary"
      class="mt-1"
      @click="this.$router.push({name: 'Reports'})"
    >Reports
    </v-btn
    >
    <v-btn
      prepend-icon="mdi-plus"
      color="secondary"
      class="mt-1"
      @click="this.$router.push({name: 'Upload'})"
    >Add
    </v-btn
    >
  </v-app-bar>
</template>

<script lang="ts" setup>
//
</script>
