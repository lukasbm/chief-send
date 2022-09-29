<template>
  <header class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Hochladen</h1>
    <p class="lead">
      Hier können Sie Dateien bis zu 1000MB hochladen und sofort per Link
      teilen.
    </p>
  </header>

  <div class="card mb-4 text-center shadow">
    <form>
      <div class="card-header">
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
            value=""
          />
        </h4>
      </div>
      <div class="card-body">
        <div class="custom-file mb-3">
          <input
            class="custom-file-input"
            id="files"
            multiple
            name="files"
            required
            type="file"
          />
          <label class="custom-file-label truncate" for="files"
            >Dateien hochladen</label
          >
        </div>

        <div class="row form-group">
          <div class="dropdown bootstrap-select col">
            <select
              class="selectpicker col"
              id="timer"
              name="timer"
              required
              tabindex="-98"
            >
              <option value="3">3 Minuten</option>
              <option value="15">15 Minuten</option>
              <option value="30">30 Minuten</option>
              <option value="120">2 Stunden</option>
              <option value="360">6 Stunden</option>
              <option selected value="1440">1 Tag</option>
              <option value="10080">7 Tage</option>
              <option value="43200">1 Monat</option>
              <option value="-1">Für immer</option></select
            ><button
              type="button"
              class="btn dropdown-toggle btn-light"
              data-toggle="dropdown"
              role="combobox"
              aria-owns="bs-select-1"
              aria-haspopup="listbox"
              aria-expanded="false"
              data-id="timer"
              title="1 Tag"
            >
              <div class="filter-option">
                <div class="filter-option-inner">
                  <div class="filter-option-inner-inner">1 Tag</div>
                </div>
              </div>
            </button>
            <div class="dropdown-menu">
              <div
                class="inner show"
                role="listbox"
                id="bs-select-1"
                tabindex="-1"
              >
                <ul class="dropdown-menu inner show" role="presentation"></ul>
              </div>
            </div>
          </div>
          <div class="dropdown bootstrap-select col">
            <select
              class="selectpicker col"
              id="download_limit"
              name="download_limit"
              required
              tabindex="-98"
            >
              <option value="1">1 Download</option>
              <option value="2">2 Downloads</option>
              <option selected value="5">5 Downloads</option>
              <option value="15">15 Downloads</option>
              <option value="50">50 Downloads</option>
              <option value="200">200 Downloads</option>
              <option value="-1">Unbegrenzt</option>
            </select>
            <button
              type="button"
              class="btn dropdown-toggle btn-light"
              data-toggle="dropdown"
              role="combobox"
              aria-owns="bs-select-2"
              aria-haspopup="listbox"
              aria-expanded="false"
              data-id="download_limit"
              title="5 Downloads"
            >
              <div class="filter-option">
                <div class="filter-option-inner">
                  <div class="filter-option-inner-inner">5 Downloads</div>
                </div>
              </div>
            </button>
            <div class="dropdown-menu">
              <div
                class="inner show"
                role="listbox"
                id="bs-select-2"
                tabindex="-1"
              >
                <ul class="dropdown-menu inner show" role="presentation"></ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row form-group">
          <p class="custom-control custom-switch col">
            <input
              class="custom-control-input"
              id="is_public"
              name="is_public"
              type="checkbox"
              value="y"
            />
            <label class="custom-control-label" for="is_public"
              >Öffentlich</label
            >
          </p>
          <div class="col">
            <input
              autocomplete="off"
              class="form-control"
              id="password"
              name="password"
              placeholder="Passwort ..."
              type="text"
              value=""
            />
          </div>
        </div>

        <div class="progress form-group d-none">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div class="form-group">
          <input
            class="btn btn-lg btn-block btn-primary"
            id="submit"
            name="submit"
            type="submit"
            value="Hochladen"
          />
          <button
            type="button"
            class="btn btn-lg btn-block btn-secondary d-none"
            id="abort"
          >
            Abbruch
          </button>
        </div>
      </div>
    </form>
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
