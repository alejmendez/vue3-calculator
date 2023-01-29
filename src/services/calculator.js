const resultLimit = 12;
const operators = ['+', '-', '*', '/',];

export const errorString = 'Error';
export const isOperator = k => operators.includes(k);
export const isDot = k => k === '.';

export const clear = _ => '0';
export const evaluate = equation => {
  const lastChar = equation.substring(equation.length - 1);
  if (isOperator(lastChar) || isDot(lastChar) || equation === '0' || equation === errorString) {
    return equation;
  }
  try {
    const resultString = String(eval(equation)).substring(0, resultLimit);
    if (resultString === 'NaN') {
      return errorString;
    }
    return resultString;
  } catch (error) {
    return errorString;
  }
};

const specialFunctions = {
  'all-clear': clear,
  '=': evaluate,
};

const specialFunctionsKeys = Object.keys(specialFunctions);

export const addCharacterToEquation = (equation, key) => {
  if (specialFunctionsKeys.includes(key)) {
    return specialFunctions[key](equation);
  }

  const keyIsOperator = isOperator(key)
  const keyIsDot = isDot(key)

  if ((equation === '0' && !keyIsOperator && !keyIsDot)) {
    return key;
  }

  if (equation === errorString) {
    return keyIsOperator || keyIsDot ? errorString : key;
  }

  const lastChar = equation.substring(equation.length - 1);
  const lastCharIsOperator = isOperator(lastChar)
  if (keyIsDot && (isDot(lastChar) || lastCharIsOperator)) {
    return equation;
  }

  if (lastCharIsOperator && keyIsOperator) {
    return equation.substring(0, equation.length - 1) + key;
  }

  const result = `${equation}${key}`;
  if (/(\d+\.\d+\.)$/.test(result)) {
    return equation;
  }

  return result;
};
