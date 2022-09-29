<script setup>
import { onMounted, ref } from "vue";
import { getPublicShares } from "../services/data";

const shares = ref(null);

onMounted(() => {
  getPublicShares()
    .then((res) => (shares.value = res))
    .catch((err) => console.error(err));
});
</script>

<template>
  <header class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Öffentliche Shares</h1>
    <p class="lead">Hier sehen Sie Shares die öffentlich hochgeladen wurden.</p>
  </header>

  <div v-if="shares" class="row">
    <div v-for="share of shares" :key="share.id" class="col md-4 my-4">
      <div class="border rounded p-4 h-100 shadow-sm">
        <h3 class="mb-4 font-weight-normal">
          {{ share.name }}
          TODOfilesize
        </h3>
        <p class="lead">{{ share.attachments?.length }} Dateien</p>
        <p class="card-text">
          <span v-if="share.downloads">
            <small class="text-muted">
              Downloads verbleibend: {{ share.downloads }}
            </small>
            <br />
          </span>
          <span v-if="share.expires">
            <small class="text-muted">
              Verfügbar bis: {{ share.expires }}
            </small>
          </span>
        </p>
        <RouterLink
          class="btn btn-lg btn-primary"
          :to="'/download/' + share.id"
        >
          Öffnen
        </RouterLink>
      </div>
    </div>
  </div>
  <div v-else class="row text-center mx-auto">
    <p>Es wurden noch keine öffentlichen Shares hochgeladen.</p>
  </div>
</template>
