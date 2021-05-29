import big, { Big } from 'big.js'

export default function operate(numberOne, numberTwo, operation){

    let bigOne = new Big(numberOne)
    let bigTwo = new Big(numberTwo)

    switch (operation) {

        case '+':
            return bigOne + bigTwo
            break;
        case '-':
            return bigOne - bigTwo
            break;
        case '/':
            return bigOne / bigTwo
            break;
        case '*':
            return bigOne * bigTwo
            break;
        case '%':
            return bigOne % bigTwo
            break;
    
        default:
            return nil
            break;
    }

}