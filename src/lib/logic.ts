import Big from 'big.js';

type Operation = '+' | '-' | '*' | '/' | '%';

export function operate(
    numberOne: string,
    numberTwo: string,
    operation: Operation
): string {
    try {
        if (!numberOne || !numberTwo || isNaN(Number(numberOne)) || isNaN(Number(numberTwo))) {
            return '0';
        }
        const one = new Big(numberOne);
        const two = new Big(numberTwo);

        if (operation === '+') {
            return one.plus(two).toString();
        }
        if (operation === '-') {
            return one.minus(two).toString();
        }
        if (operation === '*') {
            return one.times(two).toString();
        }
        if (operation === '/') {
            if (two.eq(0)) {
                return "Cannot divide by 0";
            }
            return one.div(two).toString();
        }
        if (operation === '%') {
            if (two.eq(0)) {
                return "Cannot find modulo by 0";
            }
            return one.mod(two).toString();
        }
        throw new Error(`Unknown operation '${operation}'`);
    } catch (error) {
        return `Error: ${error}`;
    }
}

export interface CalculatorState {
    total: string | null;
    next: string | null;
    operation: Operation | null;
}

const isNumber = (item: string): boolean => /[0-9]+/.test(item);

export function calculate(
    state: CalculatorState,
    buttonName: string
): CalculatorState {
    if (buttonName === 'AC') {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (isNumber(buttonName)) {
        if (buttonName === '0' && state.next === '0') {
            return state;
        }
        // If there is an operation, update next
        if (state.operation) {
            const next = state.next && state.next !== '0' ? state.next + buttonName : buttonName;
            return { ...state, next };
        }
        // If no operation, update total
        const total = state.total && state.total !== '0' ? state.total + buttonName : buttonName;
        return { ...state, total, next: null };
    }

    if (buttonName === '.') {
        if (state.next && !state.next.includes('.')) {
            return { ...state, next: state.next + '.' };
        }
        if (state.total && !state.total.includes('.')) {
            return { ...state, total: state.total + '.' };
        }
        return state;
    }

    if (buttonName === '=') {
        if (state.next && state.operation && state.total) {
            return {
                total: operate(state.total, state.next, state.operation),
                next: null,
                operation: null,
            };
        }
        // '=' with no operation returns state
        return state;
    }

    if (buttonName === '+/-') {
        if (state.next) {
            return { ...state, next: (-1 * parseFloat(state.next)).toString() };
        }
        if (state.total) {
            return { ...state, total: (-1 * parseFloat(state.total)).toString() };
        }
        return state;
    }

    // User pressed an operation.

    // If there is no number to operate on, do nothing.
    if (!state.total && !state.next) {
        return state;
    }

    // If the user presses an operation after another one, update the operation.
    if (state.operation && !state.next) {
        return { ...state, operation: buttonName as Operation };
    }

    // If we have a pending operation, execute it.
    if (state.operation && state.next && state.total) {
        const total = operate(state.total, state.next, state.operation);
        return { total, next: null, operation: buttonName as Operation };
    }

    // Save the operation and move total to next if it exists
    return {
        total: state.total || state.next,
        next: null,
        operation: buttonName as Operation,
    };
} 