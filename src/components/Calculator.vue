<script setup>
import { ref } from 'vue';
import Button from './Button.vue';

const result = ref('0');
const operators = ['+', '-', '*', '/',];
const resultLimit = 12;

const isOperator = (key) => operators.includes(key);
const isDot = (key) => key === '.';

const specialFunctions = {
  'all-clear': () => {
    result.value = '0';
  },
  '=':  () => {
    const lastChar = result.value.substring(result.value.length - 1);
    if (isOperator(lastChar) || isDot(lastChar) || result.value === '0') {
      return;
    }
    let resultString = String(eval(result.value)).substring(0, resultLimit);
    if (resultString === 'NaN') {
      resultString = 'Error';
    }
    result.value = resultString;
  },
};
const specialFunctionsKeys = Object.keys(specialFunctions);

const handleButtonClick = (key) => {
  if (specialFunctionsKeys.includes(key)) {
    return specialFunctions[key]();
  }

  if (result.value === '0' && !isOperator(key) && !isDot(key)) {
    result.value = key;
    return;
  }

  const lastChar = result.value.substring(result.value.length - 1);
  if (isOperator(lastChar) && isOperator(key)) {
    result.value = result.value.substring(0, result.value.length - 1) + key;
    return;
  }

  if (isDot(key) && (isDot(lastChar) || isOperator(lastChar))) {
    return;
  }

  result.value += key;
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
