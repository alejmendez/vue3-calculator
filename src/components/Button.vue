<script setup>
import { defineEmits } from 'vue'

const { value, text } = defineProps(['value', 'text'])
const emit = defineEmits(['click'])
</script>

<template>
  <button type="button" :value="value" @click="emit('click', value)">
    {{ text ?? value }}
  </button>
</template>

<style scoped>

</style>
