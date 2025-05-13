<script setup lang="ts">
import VButton from "~/components/base/VButton.vue";
</script>

<template>
  <section class="d-flex align-center hero">
    <div class="wrapper">
      <div class="hero-part-left mx-auto">
        <div class="brand-container">
          <div class="dash"/>
          <span class="text-uppercase">
      Samuel Guichardon - <em><strong>WebConceptions</strong></em>
    </span>
        </div>
        <h1 class="text-white fw-bold mb-0">Développeur Web <br>
          <span>Freelance à Lyon France</span><br>
        </h1>
        <div class="lh-xl">
          <h2>Création de Sites et Applications Sur-Mesure, Rapides et Sécurisés.</h2>
          <h3>Boostez votre business avec un site Web performant et des outils <br> métier digitaux
            sur-mesure.
          </h3>
          <p class="pt-3">Je vous accompagne de A à Z !</p>
        </div>
        <div class="mt-3">
          <VButton/>
        </div>
      </div>
      <div class="hero-part-right">
        <div class="p-4">
          <div class="bg-black p-3">
          <pre class="text-sm">
            <code>
    class FreelanceDev {
      constructor() {
       this.name = "Samuel Guichardon";
        this.skills = [
         "Web Development",
         "SEO Optimization",
         "Custom Solutions"
        ];
      }

      createDigitalExperience() {
       return this.transformIdeas();
      }
   }</code>
          </pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  align-items: center; /* Centre verticalement la div */
  height: 100vh;
  background: linear-gradient(135deg, rgba(22, 43, 102, 1) 0%, rgba(63, 22, 100, 1) 100%);
}

.hero-part-right, .hero-part-left {
  display: grid;
  align-items: center;
}

.hero-part-left {
  grid-template-rows: 2rem 8rem 10rem 5rem;
}

.hero-part-right {
  grid-template-rows: 1fr;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Deux colonnes de largeur égale */
  grid-template-rows: 1fr; /* Une ligne */
  width: 70%;
  margin: 0 auto;
}

.dash {
  height: 0.25rem;
  width: 4rem;
  background-color: #3b82f6;
}

.brand-container {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 7fr; /* Définit deux colonnes de largeur automatique */
}

.brand-container span {
  color: #90C1F9;
}

h1 span {
  color: #60A5FA;
}

h2, h3, p {
  font-size: 1.25rem;
  color: #CFD3DA;
  margin: 0;
  line-height: 1.8rem;
}

.hero-part-right div:nth-child(1) {
  border: 1px solid rgb(255 255 255 / 0.2);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.hero-part-right div:nth-child(2) {
  border-radius: 10px;
}

pre {
  color: #41DE80;
  margin: 0;
}
</style>