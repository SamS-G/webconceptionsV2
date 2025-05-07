<script setup lang="ts">
import type {NavPills} from "~/types/nav-pills";
import Card from "~/components/base/card.vue"

const props = defineProps<{ services: NavPills }>();
const activeTab = ref<string>('')

onMounted(() => {
  activeTab.value = props.services.navPills.find(s => s.navItem.active)?.navItem.id || props.services.navPills[0].navItem.id
})

</script>
<template>
  <!-- Liste des onglets -->
  <ul class="nav nav-pills justify-content-center flex-sm-row" role="tablist">
    <li
        v-for="(service) in services.navPills"
        :key="'tab-' + service.navItem.id"
        class="nav-item"
        role="presentation"
    >
      <button
          :id="service.navItem.id + '-tab'"
          class="flex-sm-fill text-sm-center nav-link"
          :class="{ active: activeTab === service.navItem.id }"
          data-bs-toggle="pill"
          :data-bs-target="'#' + service.navItem.id"
          type="button"
          role="tab"
          @click="activeTab = service.navItem.id"
      >
       <span>{{ service.navItem.title }}</span>
      </button>
    </li>
  </ul>

  <!-- Contenu des onglets -->
  <div class="tab-content">
    <div
        v-for="(service) in services.navPills"
        :id="service.navItem.id"
        :key="'content-' + service.navItem.id"
        class="tab-pane fade"
        :class="{ show: activeTab === service.navItem.id, active: activeTab === service.navItem.id }"
        role="tabpanel"
    >
      <div class="container grid-container">
        <Card  :content="service.tabContent"/>
      </div>

    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 3rem;
  min-height: 100vh;
}
.tab-pane {
  transition: opacity 0.3s ease;
}

.tab-pane:not(.show) {
  display: none;
}
button {
  margin: 0 2rem 3rem 2rem;
}
button[role=tab] span {
  font-weight: normal;
}
button[role=tab] {
  color: #D1D5DB;
  position: relative;
  padding: 0.6em 1.2em;
  background: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
}
button[role=tab]:before,
button[role=tab]::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: darkviolet;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.4s ease;
}
button[role=tab]:before {
  top: 0;
  transform-origin: right;
}
button[role=tab]:after {
  bottom: 0;
  transform-origin: left;
}
button[role=tab]:hover:before {
  transform: scaleX(1);
  transform-origin: left;
}
button[role=tab]:hover:after {
  transform: scaleX(1);
  transform-origin: right;
}
button[role=tab] span::before,
button[role=tab] span::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 100%;
  background: darkviolet;
  top: 0;
  transform: scaleY(0);
  transition: transform 0.4s ease 0.2s;
}

button[role=tab] span::before {
  left: 0;
  transform-origin: bottom;
}

button[role=tab] span::after {
  right: 0;
  transform-origin: top;
}

button[role=tab]:hover span::before {
  transform: scaleY(1);
  transform-origin: top;
}

button[role=tab]:hover span::after {
  transform: scaleY(1);
  transform-origin: bottom;
}


button:not(.active) {
  background-color: #1D202A;
}
</style>