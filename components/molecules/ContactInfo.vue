<script setup lang="ts">

</script>

<template>
  <div class="container contact-info-wrapper">
    <div class="contact-box p-4 rounded-4 border">
      <h3 class="fs-3 fw-semibold mb-4">Autres moyens de contact</h3>

      <div class="d-flex flex-column gap-4">
        <!-- Email -->
        <div class=" d-flex align-items-start gap-3">
          <div class="icon-wrapper bg-primary bg-opacity-25 p-3 rounded-3">
            <svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color="#63b3ed"
                stroke-width="1.5" stroke="currentColor">

              <path
                  stroke-linecap="round" stroke-linejoin="round" color="#60a5fa"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
            </svg>
          </div>
          <div class="email">
            <h4 class="fs-5 fw-medium">Email</h4>
            <p class="contact-way-value email">samuel.guichardon@webconceptions.fr</p>
            <a href="mailto:samuel.guichardon@webconceptions.fr" class="link-primary">Envoyer un email</a>
          </div>
        </div>

        <!-- WhatsApp -->
        <div class="d-flex align-items-start gap-3">
          <div class="icon-wrapper bg-success bg-opacity-25 p-3 rounded-3">
            <svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
              <path
                  stroke-linecap="round" stroke-linejoin="round" color="#68d391"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
            </svg>
          </div>
          <div>
            <h4 class="fs-5 fw-medium">WhatsApp</h4>
            <p class="contact-way-value">06 82 36 76 46</p>
            <a href="https://wa.me/33682367646" class="link-success">Discuter sur WhatsApp</a>
          </div>
        </div>

        <!-- Téléphone -->
        <div class="d-flex align-items-start gap-3">
          <div class="icon-wrapper bg-purple bg-opacity-25 p-3 rounded-3">
            <svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-purple-400">
              <path
                  stroke-linecap="round" stroke-linejoin="round" color="#c084fc"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
            </svg>
          </div>
          <div>
            <h4 class="fs-5 fw-medium">Téléphone</h4>
            <p class="contact-way-value">06 82 36 76 46</p>
            <a href="tel:+33682367646" class="text-decoration-none" style="color: #a64eff;">Appeler maintenant</a>
          </div>
        </div>

        <!-- Calendly -->
        <div class="d-flex align-items-start gap-3">
          <div class="icon-wrapper bg-orange bg-opacity-25 p-3 rounded-3">
            <svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-orange-400">
              <path
                  stroke-linecap="round" stroke-linejoin="round" color="#f6ad55"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
            </svg>
          </div>
          <div>
            <h4 class="fs-5 fw-medium">Prendre rendez-vous</h4>
            <p class="contact-way-value">Réservez un créneau en ligne</p>
            <a href="https://calendly.com/webconceptions" class="text-orange">Voir les disponibilités</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.contact-info-wrapper {
  padding-top: 10vh;
  padding-bottom: 10vh;
}
a {
  text-decoration: none;
}

h3, h4 {
  color: rgb(209 213 219);
}
.contact-way-value {
  color: rgb(209 213 219);
  font-weight: 300!important;
}
.contact-box {
  background-color:#1D202A;
  backdrop-filter: blur(10px);
  border-color: rgba(255, 255, 255, 0.2);
  transition: background-color 0.3s ease;
}

.contact-box:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.bg-purple {
  background-color: rgba(147, 51, 234, 0.2) !important;

}

.bg-orange {
  background-color: rgb(251, 146, 60, 0.2) !important;
}

.text-orange {
  color: #f6ad55;
}

.text-purple {
  color: #a64eff !important;
}

.icon-wrapper svg {
  width: 24px;
  height: 24px;
  color: inherit;
}
@media (max-width: 1024px) {
  p {
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }
  .email{
   overflow: auto;
  }
  .contact-info-wrapper {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}
</style>