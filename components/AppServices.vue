<script lang="ts" setup>
import services from '@/assets/content/services.json'
import NavPills from "~/components/base/navPills.vue";
</script>

<template>
  <section id="services">
    <NavPills
        :services="services"/>
  </section>
</template>

<style scoped>
#services {
  padding: 4rem;
  background-color: black;
}
</style>