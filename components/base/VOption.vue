<script setup lang="ts">
import { ref } from 'vue'
import type { SelectOption, OptionProps } from '~/interfaces/contact-form'

const emit = defineEmits(['update:model-value', 'reset:value'])

const props = defineProps<OptionProps>()

const isSelected = (option: SelectOption) => {
  return option === selectedOption.value
}
const selectOption = (option: SelectOption) => {
  emit('update:model-value', option.value)
  selectedOption.value = option
  isOpen.value = false
}
const openOrCloseOptions = () => {
  isOpen.value = !isOpen.value
}
const selectedOption = ref<SelectOption>({ label: '', value: '' })
const isOpen = ref<boolean>(false)
</script>

<template>
  <div class="options-wrapper">
    <div
      v-if="selectedOption.label && !props.reset && !isOpen"
      class="selected-option"
    >
      <span>
        {{ selectedOption.label }}
      </span>
    </div>

    <div
      v-else
      class="options-placeholder"
    >
      <span>
        {{ props.placeholder }}
      </span>
    </div>
    <Transition name="slide-fade">
      <div
        v-if="isOpen"
        class="items-wrapper"
      >
        <option
          v-for="(option, i) in props.options"
          :key="i"
          class="option-item"
          :class="{
            'is-selected': isSelected(option) && !props.reset,
          }"
          :value="option.value"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </option>
      </div>
    </Transition>
    <div
      class="select-icon"
      @click="openOrCloseOptions"
    />
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.options-wrapper {
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.items-wrapper {
  position: absolute;
  background: white;
  width: 100%;
}

.options-wrapper {
  z-index: 9999;
  border: 1px solid #ddd;
  min-height: max-content;
}

.select-icon {
  position: absolute;
  top: 0;
}

.select-icon {
  cursor: pointer;
  border-right: 1px solid #ddd;
}

.items-container {
  border: 1px solid #ddd;
}

.options-placeholder,
.selected-option {
  margin-left: 2rem;
  margin-right: 0.5rem;
}

.items-container {
  padding: 0.5rem;
  width: max-content;
}

svg {
  color: black;
  filter: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.options-wrapper:hover {
  border: 1px solid gray;
}

.is-selected {
  background: #e6f7ff;
}

.option-item:hover {
  background: lightgrey;
}

.error {
  border-color: red;
}
</style>
