<template>
  <v-app theme="dark">
    <default-bar/>

    <default-view/>
    <v-footer class="footer-height">
      <v-row class="justify-center">
        <v-col class="text-center">
          {{ new Date().getFullYear() }} —
          <strong
          >Made with
            <v-icon icon="mdi-heart" color="#e63eb6"></v-icon>
            by
            NinjaPanda</strong
          >
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
</script>
<style>
.footer-height {
  max-height: 50px;
}
</style>
