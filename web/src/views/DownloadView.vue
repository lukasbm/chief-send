<script setup>
import { ref } from "vue";
import { getShare } from "../services/data";
import { useRoute } from "vue-router";

const share = ref(null);

const shareId = useRoute().params.id ?? null;

getShare(shareId)
  .then((res) => (share.value = res))
  .catch((err) => console.error(err));
</script>

<template>
  <header class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Herunterladen</h1>
    <p class="lead">
      Hier laden sie die zu ihrem Code zugehörigen Dateien runter.
    </p>
  </header>

  <div v-if="share">
    <div class="card mb-4 shadow-sm text-center">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">
          {{ share.name }}
        </h4>
        <p>Verbleibende Downloads: {{ share.downloads }}</p>
        <p>Verfügbar bis: {{ share.expires }}</p>
      </div>

      <div class="card-body">
        <ul class="list-group">
          <li
            v-for="attachment of share.attachments"
            :key="attachment.id"
            class="list-group-item"
          >
            {{ file.filename }}
            <a
              href="{{ url_for('media', share_id=file.share_id, filename=file.filename) }}"
              download
            >
              <button
                class="btn btn-outline-primary streched-link float-right"
                type="button"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-download"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                  ></path>
                </svg>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else class="row text-center mx-auto">
    <p>Share konnte nicht gefunden werden?</p>
  </div>
</template>
