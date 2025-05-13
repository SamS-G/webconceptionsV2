<script setup lang="ts">
import {defineProps, ref, computed} from 'vue'
import {useField} from 'vee-validate'
import {form as validationSchemas} from '~/server/schema/form'
import type {SelectProps} from '~/interfaces/contact-form'

const props = defineProps<SelectProps>()

// Opens/closes options menu
const isOpen = ref(false)

// Récupération des données de validation depuis VeeValidate
const {meta, errorMessage, handleChange, value} = useField(
    () => props.select.name,
    validationSchemas,
    {
      validateOnMount: false,
      validateOnValueUpdate: true,
    },
)

// Selected value (synchronized with validation system)
const selectedValue = computed({
  get: () => value.value,
  set: (newValue: string) => {
    handleChange(newValue) // Informs VeeValidate of the change
    value.value = newValue // Updates the linked value
    isOpen.value = false // Close menu
  },
})

// Placeholder or selected value to display
const displayValue = computed(() => {
  return selectedValue.value || props.select.placeholder
})
</script>

<template>
  <div
      class="select-wrapper mb-5"
  >
    <!-- Select label -->
    <label>{{ props.select.label }}</label>
    <div class="select-container">
    <!-- Sélect -->
      <div
          class="select-display form-control"
          :class="{
          open: isOpen,
          error: errorMessage,
          isValid:meta.valid
          }"
          @click="isOpen = !isOpen"
      >
        <span class="display-text">{{ displayValue }}</span>
        <!-- Caret -->
        <span class="arrow">&#9662;</span>
      </div>
      <!-- Transition des options -->
      <Transition name="slide-right-left">
        <ul
            v-if="isOpen"
            class="options-list"
            @blur="isOpen = false"
        >
          <li
              v-for="(option, i) in props.select.options"
              :key="i"
              class="option-item"
              :class="{ selected: option.value === selectedValue }"
              @click="selectedValue = option.value"
          >
            {{ option.label }}
          </li>
        </ul>
      </Transition>
      <!-- Error message -->
      <p
          v-if="errorMessage"
          class="error-message"
      >
        <small class="form-text text-danger">{{ errorMessage }}</small>
      </p>
    </div>
  </div>
</template>

<style scoped>
.select-wrapper {
  width: max-content;
  position: relative;
  overflow: visible;
}
.select-wrapper label {
  padding-left: 2rem;
  padding-right: 2rem;
  display: block;
  color: #BBBFC5;
}
.select-container {
  padding-left: 2rem;
  padding-right: 2rem;
  width: max-content;
  position: relative;
  margin-top: 0.5vh;

}
.select-display {
  border-radius: 4px;
  border-color: #3E414A;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #292C35;
  color: #9CA3AF;
}
.select-display.open {
  border-color: #007bff;
}
.select-display.error {
  border-color: red;
  border-width: 2px;
}
.arrow {
  font-size: 0.8rem;
  color: #888;
  margin-left: 1rem;
  transition: transform 0.3s;
}
.select-display.open .arrow {
  transform: rotate(180deg);
}
.display-text, .display-text:focus {
  color: white;
}
.options-list {
  position: absolute;
  background-color: #292C35;
  color: #9CA3AF;
  border: 1px solid #3E414A;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: none; /* Supprime toute limitation de hauteur */
  overflow: visible;
  z-index: 1000;
  width: calc(100% - 4rem); /* 100% minus 2rem left and 2rem right */
  left: 2rem; /* Aligned with start of padding */
  right: 2rem; /* Aligned with end of padding */
}
.option-item {
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}
.option-item:hover {
  background-color: #e0e0e0;
}
.option-item.selected {
  background-color: #007bff;
  color: white;
}
.isValid {
  border: 2px solid #28a745;
  filter: none;
}

/* Transition from right to left */

.slide-right-left-enter-active,
.slide-right-left-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}
.slide-right-left-enter-from,
.slide-right-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-left-enter-to,
.slide-right-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
