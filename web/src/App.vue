<script setup>
import { RouterView } from "vue-router";
import SiteHeader from "./components/SiteHeader.vue";
</script>

<template>
  <SiteHeader />

  <main class="container">
    <RouterView />
  </main>

  <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="footer-copyright text-center py-3">
      <small class="d-block mb-3 text-muted text-center"
        >Chief Corporation &copy; 2020</small
      >
    </div>
  </footer>
</template>
