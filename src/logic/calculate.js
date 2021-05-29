
export default function calculate(calculatorData ,buttonName){
    switch (buttonName) {
        case "+/-":
            calculatorData.next *= -1
            calculatorData.total *= -1
            break;
        case "AC":
            calculatorData.next *= 0
            calculatorData.total *= 0
            break;
        case "%":
            calculatorData.operation = '%'
            break;
        case "/":
            calculatorData.operation = '/'
            break;

        case "7":
            calculatorData.next = 7
            break;
        case "8":
            calculatorData.next = 8
            break;
        case "9":
            calculatorData.next = 9
            break;
        case "X":
            calculatorData.operation = '*'
            break;

        case "4":
            calculatorData.next = 4
            break;
        case "5":
            calculatorData.next = 5
            break;
        case "6":
            calculatorData.next = 6
            break;
        case "-":
            calculatorData.operation = '-'
            break;

        case "1":
            calculatorData.next = 1
            break;
        case "2":
            calculatorData.next = 2
            break;
        case "3":
            calculatorData.next = 3
            break;
        case "+":
            calculatorData.operation = '+'
            break;

        case "0":
            calculatorData.next = 0
            break;
        case ".":
            calculatorData.operation = "."
            break;
        case "=":
            calculatorData.next = "="
            break;    
        default:
            calculatorData.next = nil
            calculatorData.total = nil
            calculatorData.operation = nil
            break;
    }
    return calculatorData
}
