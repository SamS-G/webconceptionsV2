<script setup lang="ts">
import {useField} from 'vee-validate'
import type {InputProps} from '~/interfaces/contact-form'
import {form as validationSchemas} from '~/server/schema/form'

const props = defineProps<InputProps>()

const {meta, errorMessage, handleBlur, handleChange, value} = useField(
    () => props.input.name,
    validationSchemas,
    {
      validateOnMount: false,
      validateOnValueUpdate: false,

    })
/**
 * Checks the field once the user moves on to the next one,
 * then performs a real-time validate when the user corrects.
 */
const validationListeners = {
  blur: (e: Event) => {
    handleBlur(e, true);
  },
  change: handleChange,
  input: (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (props.input.type === 'checkbox') {
      // Pour les cases à cocher, on passe la valeur checked
      handleChange(target.checked, Boolean(errorMessage.value));
    } else {
      // Pour les autres inputs, on passe l'événement entier
      handleChange(e, Boolean(errorMessage.value));
    }
  },
}
</script>

<template>
  <div
      class="mb-5"
      :class="{
      'input-wrapper-checkbox': props.input.type === 'checkbox',
      'input-wrapper-text-area': props.input.type === 'textarea',
      'input-wrapper': props.input.type !== 'checkbox' && props.input.type !== 'textarea',
    }"
  >
    <!-- Input or textarea label -->
    <label :for="props.input.id">{{ input.label }}</label>
    <!-- Textarea -->
    <div
        v-if="props.input.type === 'textarea'"
        class="text-area-container"
    >
      <textarea
          :id="props.input.id"
          class="form-control"
          :class="{
            error: errorMessage,
             isValidTextA: meta.valid && (props.input.type as string) !== 'submit'
             }"
          :placeholder="props.input.placeholder"
          :rows="props.input.rows"
          :cols="props.input.cols"
          :name="props.input.name"
          :value="value as undefined"
          v-on="validationListeners"
      />
      <!-- Textarea validation error -->
      <p v-if="errorMessage">
        <small
            class="form-text text-danger"
        >{{ errorMessage }}</small>
      </p>
    </div>
    <!-- Input checkbox or submit attribute -->
    <div
        v-else
        class="input-container"
        :class="{
        submit: input.type === 'submit',
        checkbox: input.type === 'checkbox',
      }"
    >
      <!-- Input or checkbox field-->
      <input
          :id="props.input.id"
          :checked="input.type === 'checkbox' && value !== false"
          :value="input.type === 'submit' ? input.value : value"
          :name="props.input.name"
          :class="{
          'form-control': input.type !== 'checkbox' && 'submit',
          'form-check-input': input.type === 'checkbox',
          'btn btn-primary bg-primary btn-lg': input.type === 'submit',
          'error': errorMessage,

           isValidInput: meta.valid && props.input.type !== 'submit'
        }"
          :placeholder="input.placeholder"
          :type="input.type"
          v-on="validationListeners"
      >
      <svg
          v-if="input.type === 'submit'"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-5 h-5">
        <path
            stroke-linecap="round" stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
      </svg>

      <!-- Checkbox label -->
      <label
          v-if="input.checkboxLabel"
          :for="props.input.id"
          class="checkbox-label"
      >
        {{ input.checkboxLabel }}
      </label>
      <!-- Checkbox validation error -->
      <p
          v-if="errorMessage"
          class="error"
      >
        <small class="form-text text-danger">{{ errorMessage }}</small>
      </p>
    </div>
  </div>
</template>

<style scoped>
.checkbox .input-container {
  margin-right: 1rem;
  border-color: dimgrey;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  gap: 10px;
}

.form-check-input {
  grid-column: 1;
  grid-row: 1;
  border: 1px solid dimgrey;
}

.checkbox-label {
  grid-column: 2;
  grid-row: 1;
  margin-left: 1rem;
  padding: 0 !important;
  font-size: 0.87rem;
  font-style: italic;
  color: #BBBFC5;
  font-weight: 400;
}

p {
  grid-column: 1 / span 2;
  grid-row: 2;
}

.btn-sm {
  width: max-content;
}

.isValidTextA,
.isValidInput {
  border: 2px solid #28a745;
  filter: none;
}

.error{
  border-color: red;
  border-width: 2px;
}

input,
textarea {
  border-color: #3E414A;
}
input, input:focus, textarea, textarea:focus {
  color: white;
}
input::placeholder,
textarea::placeholder {
  color: #9CA3AF;
}

.input-container,
.text-area-container {
  position: relative;
  align-items: center;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 0.5vh;
}

.input-wrapper {
  position: relative;
}

.input-wrapper label,
.input-wrapper-text-area label {
  padding-left: 2rem;
  padding-right: 2rem;
  display: block;
  color: #BBBFC5;
  font-weight: 400;
}

.submit {
  min-height: 0;
}

.submit svg {
  vertical-align: middle;
  position: absolute;
  right: 38%;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  pointer-events: none;
}

.checkbox p {
  margin: 0;
}

.form-control {
  background-color: #292C35;
}
</style>
