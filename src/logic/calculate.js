import operate from './operate';

export default function calculate(calculatorData, buttonName) {
  console.log(calculatorData);
  let { next, operation, total } = calculatorData;

  switch (buttonName) {
    case '+/-':
      if (next) {
        next *= -1;
      } else {
        total *= -1;
      }

      break;
    case 'AC':
      next = '';
      total = '';
      operation = null;
      break;
    case '%':
      if (operation) {
        total = (operate(total, next, operation)).toString();
        next = '';
      }
      operation = '%';
      break;
    case '/':
      if (operation) {
        total = (operate(total, next, operation)).toString();
        next = '';
      }
      operation = '/';
      break;

    case '7':
      if (operation) {
        if (next) {
          next += '7';
        } else {
          next = '7';
        }
      } else if (total) {
        total += '7';
      } else {
        total = '7';
      }
      break;
    case '8':
      if (operation) {
        if (next) {
          next += '8';
        } else {
          next = '8';
        }
      } else if (total) {
        total += '8';
      } else {
        total = '8';
      }
      break;
    case '9':
      if (operation) {
        if (next) {
          next += '9';
        } else {
          next = '9';
        }
      } else if (total) {
        total += '9';
      } else {
        total = '9';
      }
      break;
    case 'X':
      if (operation) {
        total = (operate(total, next, operation)).toString();
        next = '';
      }
      operation = '*';
      break;

    case '4':
      if (operation) {
        if (next) {
          next += '4';
        } else {
          next = '4';
        }
      } else if (total) {
        total += '4';
      } else {
        total = '4';
      }
      break;
    case '5':
      if (operation) {
        if (next) {
          next += '5';
        } else {
          next = '5';
        }
      } else if (total) {
        total += '5';
      } else {
        total = '5';
      }
      break;
    case '6':
      if (operation) {
        if (next) {
          next += '6';
        } else {
          next = '6';
        }
      } else if (total) {
        total += '6';
      } else {
        total = '6';
      }
      break;
    case '-':
      if (operation) {
        total = (operate(total, next, operation)).toString();
        next = '';
      }
      operation = '-';
      break;

    case '1':
      if (operation) {
        if (next) {
          next += '1';
        } else {
          next = '1';
        }
      } else if (total) {
        total += '1';
      } else {
        total = '1';
      }
      break;
    case '2':
      if (operation) {
        if (next) {
          next += '2';
        } else {
          next = '2';
        }
      } else if (total) {
        total += '2';
      } else {
        total = '2';
      }
      break;
    case '3':
      if (operation) {
        if (next) {
          next += '3';
        } else {
          next = '3';
        }
      } else if (total) {
        total += '3';
      } else {
        total = '3';
      }
      break;
    case '+':
      if (operation) {
        total = (operate(total, next, operation)).toString();
        next = '';
      }
      operation = '+';
      break;

    case '0':
      if (operation) {
        if (next) {
          next += '0';
        } else {
          next = '0';
        }
      } else if (total) {
        total += '0';
      } else {
        total = '0';
      }
      break;
    case '.':
      if (operation) {
        if (next) {
          if (!next.includes('.')) next += '.';
        } else {
          next = '.';
        }
      } else if (total != null) {
        if (!total.includes('.')) total += '.';
      } else {
        total = '.';
      }
      break;
    case '=':
      if (operation && next) {
        total = (operate(total, next, operation)).toString();
        next = '';
        operation = null;
      }
      break;

    default:
      next = null;
      total = null;
      operation = null;
      break;
  }
  return { next, total, operation };
}
