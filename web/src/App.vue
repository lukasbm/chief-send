<script setup>
import { RouterView } from "vue-router";
import SiteHeader from "./components/SiteHeader.vue";
</script>

<template>
  <SiteHeader />

  <main class="container">
    <RouterView />
  </main>

  <footer class="pt-4 my-md-5 pt-md-2 border-top">
    <div class="footer-copyright text-center">
      <small class="d-block mb-3 text-muted text-center">&copy; 2022</small>
    </div>
  </footer>
</template>
