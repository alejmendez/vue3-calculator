<script setup>
import { ref } from 'vue';
import Button from './Button.vue';
import { addCharacterToEquation } from '../services/calculator';

const result = ref('0');

const handleButtonClick = key => {
  result.value = addCharacterToEquation(result.value, key);
}
</script>

<template>
  <div class="calculator">
    <input type="text" class="calculator-screen" disabled v-model="result" />

    <div class="calculator-keys">
      <Button type="button" class="operator" value="+" @click="handleButtonClick" />
      <Button type="button" class="operator" value="-" @click="handleButtonClick" />
      <Button type="button" class="operator" value="*" text="&times;" @click="handleButtonClick" />
      <Button type="button" class="operator" value="/" text="&divide;" @click="handleButtonClick" />

      <Button type="button" value="7" @click="handleButtonClick" />
      <Button type="button" value="8" @click="handleButtonClick" />
      <Button type="button" value="9" @click="handleButtonClick" />

      <Button type="button" value="4" @click="handleButtonClick" />
      <Button type="button" value="5" @click="handleButtonClick" />
      <Button type="button" value="6" @click="handleButtonClick" />

      <Button type="button" value="1" @click="handleButtonClick" />
      <Button type="button" value="2" @click="handleButtonClick" />
      <Button type="button" value="3" @click="handleButtonClick" />

      <Button type="button" value="0" @click="handleButtonClick" />
      <Button type="button" class="decimal" value="." @click="handleButtonClick" />
      <Button type="button" class="all-clear" value="all-clear" text="AC" @click="handleButtonClick" />

      <Button type="button" class="equal-sign" value="=" @click="handleButtonClick" />
    </div>
  </div>
</template>

<style scoped>

</style>
