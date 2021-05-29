export default function calculate(calculatorData, buttonName) {
  let myNext = calculatorData.next;
  let myOperation = calculatorData.operation;
  let myTotal = calculatorData.total;

  switch (buttonName) {
    case '+/-':
      myNext *= -1;
      myTotal *= -1;
      break;
    case 'AC':
      myNext *= 0;
      myTotal *= 0;
      break;
    case '%':
      myOperation = '%';
      break;
    case '/':
      myOperation = '/';
      break;

    case '7':
      myNext = 7;
      break;
    case '8':
      myNext = 8;
      break;
    case '9':
      myNext = 9;
      break;
    case 'X':
      myOperation = '*';
      break;

    case '4':
      myNext = 4;
      break;
    case '5':
      myNext = 5;
      break;
    case '6':
      myNext = 6;
      break;
    case '-':
      myOperation = '-';
      break;

    case '1':
      myNext = 1;
      break;
    case '2':
      myNext = 2;
      break;
    case '3':
      myNext = 3;
      break;
    case '+':
      myOperation = '+';
      break;

    case '0':
      myNext = 0;
      break;
    case '.':
      myOperation = '.';
      break;
    case '=':
      myNext = '=';
      break;
    default:
      myNext = null;
      myTotal = null;
      myOperation = null;
      break;
  }
  return { next: myNext, total: myTotal, operation: myOperation };
}
