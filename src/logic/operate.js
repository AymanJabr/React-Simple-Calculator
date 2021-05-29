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
      return bigOne / bigTwo;
    case '*':
      return bigOne * bigTwo;
    case '%':
      return bigOne % bigTwo;

    default:
      return null;
  }
}
