<script setup>
import { ref } from "vue";

const name = ref("");
const expires = ref(1440);
const downloads = ref(5);
const isPublic = ref(false);
</script>

<template>
  <header class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Hochladen</h1>
    <p class="lead">
      Hier können Sie Dateien bis zu 1000MB hochladen und sofort per Link
      teilen.
    </p>
  </header>

  <div class="card mb-4 text-center shadow">
    <header class="card-header">
      <h4 class="my-0 font-weight-normal">
        <input
          autocomplete="off"
          class="form-control"
          id="name"
          maxlength="64"
          name="name"
          placeholder="Name vergeben (optional)"
          size="64"
          type="text"
          v-model="name"
        />
      </h4>
    </header>
    <main class="card-body">
      <div class="row form-group">
        <div class="col">
          <select
            class="custom-select"
            id="timer"
            name="timer"
            required
            tabindex="-98"
            v-model="expires"
          >
            <option value="3">3 Minuten</option>
            <option value="15">15 Minuten</option>
            <option value="30">30 Minuten</option>
            <option value="120">2 Stunden</option>
            <option value="360">6 Stunden</option>
            <option value="1440">1 Tag</option>
            <option value="10080">7 Tage</option>
            <option value="43200">1 Monat</option>
            <option value="-1">Für immer</option>
          </select>
        </div>
        <div class="col">
          <select
            class="custom-select"
            id="download_limit"
            name="download_limit"
            required
            tabindex="-98"
            v-model="downloads"
          >
            <option value="1">1 Download</option>
            <option value="2">2 Downloads</option>
            <option value="5">5 Downloads</option>
            <option value="15">15 Downloads</option>
            <option value="50">50 Downloads</option>
            <option value="200">200 Downloads</option>
            <option value="-1">Unbegrenzt</option>
          </select>
        </div>
        <div class="custom-control custom-switch col unselectable">
          <input
            class="custom-control-input"
            id="is_public"
            name="is_public"
            type="checkbox"
            v-model="isPublic"
          />
          <label class="custom-control-label" for="is_public">
            Öffentlich
          </label>
        </div>
      </div>

      <div class="form-group">
        <button
          class="btn btn-lg btn-block btn-primary"
          id="submit"
          name="submit"
          type="button"
        >
          Hochladen
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.truncate {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
