<script setup lang="ts">
import { useForm } from 'vee-validate'
import { form } from '~/server/schema/form'
import { sanitizeObject } from '~/composables/sanitizeObject'
import type { ModalStatus } from '~/interfaces/modal-status'

const statusModal = ref<ModalStatus>()

const emit = defineEmits(['update-status-modal'])

const SEND_EMAIL_URL = '/api/contact'

const { handleSubmit, resetForm } = useForm({
  validationSchema: form,
  initialValues: {
    email: '',
    subject: '',
    reason: '',
    name: '',
    message: '',
    terms: false,
    submit: undefined,
  },
})
const handleReset = () => {
  resetForm({
    values: {
      email: '',
      subject: '',
      name: '',
      message: '',
      terms: false,
    },
  })
}
const onSubmit = handleSubmit(async (values) => {
  try {
    statusModal.value = { visible: true, status: 'loading' }
    emit('update-status-modal', statusModal.value)

    const sanitizedForm = await sanitizeObject(values, ['terms', 'submit'])

    const data = await $fetch(SEND_EMAIL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: sanitizedForm,
    })

    if (data) {
      statusModal.value = {
        visible: true,
        status: 'success',
        successMessage: 'Votre message a été envoyé,je vous réponds au plus vite.',
        successTitle: 'Succès',
      }
    }
    emit('update-status-modal', statusModal.value)
  }
  catch (err) {
    const error = err as Error
    statusModal.value = {
      visible: true,
      status: 'error',
      errorMessage: 'Désolé, mais une erreur s\'est produite. Pourriez-vous réessayer ?',
      errorTitle: 'Erreur',
    }
    emit('update-status-modal', statusModal.value)
    console.error(error.message)
  }
  finally {
    handleReset()
  }
})
</script>

<template>
  <div class="container form-container">
    <form
      class="mt-4"
      @submit.prevent="onSubmit"
    >
      <div class="controls">
        <div class="form-group">
          <slot name="select" />
          <slot name="input" />
        </div>
      </div>
    </form>
    <slot name="modal" />
  </div>
</template>

<style scoped>
.form-container {
  position: relative;
  z-index: 1;
  overflow: visible;
}

form {
  border-radius: 5px;
  background-color: #1D202A;
}

.form-group {
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
}
</style>
