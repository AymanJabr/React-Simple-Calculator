/* eslint-disable no-unused-vars */
import operate from './operate';
/* eslint-enable no-unused-vars */

export default function calculate(calculatorData, buttonName) {
  let { next, operation, total } = calculatorData;

  switch (buttonName) {
    case '+/-':
      next *= -1;
      total *= -1;
      break;
    case 'AC':
      next *= 0;
      total *= 0;
      break;
    case '%':
      operation = '%';
      break;
    case '/':
      operation = '/';
      break;

    case '7':
      next = 7;
      break;
    case '8':
      next = 8;
      break;
    case '9':
      next = 9;
      break;
    case 'X':
      operation = '*';
      break;

    case '4':
      next = 4;
      break;
    case '5':
      next = 5;
      break;
    case '6':
      next = 6;
      break;
    case '-':
      operation = '-';
      break;

    case '1':
      next = 1;
      break;
    case '2':
      next = 2;
      break;
    case '3':
      next = 3;
      break;
    case '+':
      operation = '+';
      break;

    case '0':
      next = 0;
      break;
    case '.':
      operation = '.';
      break;
    case '=':
      next = '=';
      break;
    default:
      next = null;
      total = null;
      operation = null;
      break;
  }
  return { next, total, operation };
}
