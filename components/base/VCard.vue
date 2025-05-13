<script setup lang="ts">
import type {TabContentItem} from "~/types/tab-content-item"

defineProps<{ content: TabContentItem[] }>();
</script>

<template>
  <div v-for="(item, index) in content" :key="index" class="card">
    <div class="grid-item card-body">
      <h3 class="card-title h5 d-flex align-items-center gap-2">
        <img v-if="item.img" :alt="item.img" :src="item.img">
        {{ item.h3 }}
      </h3>
      <h4 class="card-subtitle my-3 h6">{{ item.h4 }}</h4>
      <p class="card-text">{{ item.p }}</p>
      <ul class="list-unstyled mb-0">
        <li v-for="(el, i) in item.ul" :key="i" class="fw-light lh-lg">
          <span>▸</span> {{ el }}
        </li>
      </ul>
      <p v-if="item.optional">{{ item.optional }}</p>
    </div>
  </div>
</template>

<style scoped>

.grid-item {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
}

.card {
  border: none;
  background-color: #1D202A;
}

.card-body {
  color: white;
  padding: 2rem;
}

.card-body h4 {
  color: #D1D5DB;
}

li {
  font-size: 0.9rem;
}

span {
  color: dodgerblue;
}
</style>