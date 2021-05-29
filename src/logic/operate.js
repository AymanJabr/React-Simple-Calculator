import { Big } from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const bigOne = new Big(numberOne);
  const bigTwo = new Big(numberTwo);

  switch (operation) {
    case '+':
      return bigOne + bigTwo;
    case '-':
      return bigOne - bigTwo;
    case '/':
      if (bigTwo === 0) {
        throw new Error('canno\'t divide by 0');
      }
      return bigOne / bigTwo;
    case '*':
      return bigOne * bigTwo;
    case '%':
      if (bigTwo === 0) {
        throw new Error('canno\'t divide by 0');
      }
      return bigOne % bigTwo;

    default:
      return null;
  }
}
