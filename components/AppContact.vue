<script setup lang="ts">
import type {ContactForm} from '~/interfaces/contact-form.d.ts';
import data from "~/assets/content/contact.json"
import VSelect from "~/components/base/VSelect.vue";
import VForm from "~/components/base/VForm.vue";
import VInput from "~/components/base/VInput.vue";
import VModalStatus from "~/components/base/VModalStatus.vue";
import type {ModalStatus} from "~/interfaces/modal-status";
import ContactInfo from "~/components/molecules/ContactInfo.vue";

const fieldsData = ref<ContactForm>(data);
const modalData = ref<ModalStatus>({visible: false})
const statusModalState = (val: ModalStatus) => {
  modalData.value = val
  setTimeout(clearModalStatus, 5000) // Remove after 5s
}
const clearModalStatus = () => {
  modalData.value.visible = false
}
</script>

<template>
  <section
      id="contact"
  >
    <div class="section-title text-center">
      <h2>📩 <span>Discutons</span> ensemble de votre projet.</h2>
      <p>Réponse garantie sous 24h !</p>
    </div>
    <!-- Formulaire -->
    <div class="container mt-5">
      <div class="contact-form">
        <VForm
            @update-status-modal="statusModalState"
        >
          <template #select>
            <VSelect
                :select="fieldsData.select"
            />
          </template>
          <template #input>
            <VInput
                v-for="(input, i) in fieldsData.inputs"
                :key="i"
                :input="input"
                :validate="true"
                :errors="errors"
            />
          </template>
          <!-- Modal -->
          <template #modal>
            <VModalStatus
                :visible="modalData.visible"
                :status="modalData.status"
                :success-message="modalData.successMessage"
                :error-message="modalData.errorMessage"
                :success-title="modalData.successTitle"
                :error-title="modalData.errorTitle"
                @close="modalData.visible = false"
            />
          </template>
        </VForm>
        <p class="my-3 mx-3 text-white">
          <strong>*</strong> Ces champs sont requis.
        </p>
      </div>
      <ContactInfo/>
    </div>
  </section>
</template>

<style scoped>
#contact {
  background-color: black;
}

.section-title h2 {
  font-weight: 800;
  color: white;
}

.section-title h2 span {
  color: #60A5FA;
}

.section-title p {
  color: #D1D5DB;
  font-size: 1.2rem;
}
</style>