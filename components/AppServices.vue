<script lang="ts" setup>
import services from '~/assets/content/services.json'
import VNavPills from "~/components/base/VNavPills.vue";
</script>

<template>
  <section id="services">
    <VNavPills
        :services="services"/>
  </section>
</template>

<style scoped>
#services {
  padding: 4rem;
  background-color: black;
}
@media (max-width: 1024px) {
  #services {
    padding: 5rem 1rem;
  }
}
</style>