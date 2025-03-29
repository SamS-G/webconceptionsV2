<script setup lang="ts">

</script>

<template>
  <div class="arrow-container">
    <div class="button-container">
      <a class="btn ">
        🚀 Discutons de Votre Projet
      </a>
      <div class="rotating-rect" />
    </div>
  </div>
</template>

<style scoped>
.arrow-container {
  display: flex;
  align-items: center;
}

.button-container {
  position: relative;
  display: inline-block;
}

.btn {
  display: inline-block;
  padding: 15px 20px;
  background-color: #2563EB;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 2;
}

.rotating-rect {
  position: absolute;
  width: 260px;
  height: 60px;
  border: 3px solid #2563EB;
  border-radius: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotateBackAndForth 10s linear infinite;
  z-index: 1;
}

/* Animation : tourne dans un sens, puis dans l'autre */
@keyframes rotateBackAndForth {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
    width: 360px;
  }
  12.5% {
    width: 60px;
  }
  /* Rétrécissement à 45° */
  25% {
    transform: translate(-50%, -50%) rotate(180deg);
    width: 260px;
  }
  37.5% {
    width: 60px;
  }
  /* Rétrécissement à 135° */
  50% {
    transform: translate(-50%, -50%) rotate(360deg);
    width: 260px;
  }
  62.5% {
    width: 60px;
  }
  /* Rétrécissement à 135° en sens inverse */
  75% {
    transform: translate(-50%, -50%) rotate(180deg);
    width: 260px;
  }
  87.5% {
    width: 60px;
  }
  /* Rétrécissement à 45° en sens inverse */
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
    width: 260px;
  }
}
</style>