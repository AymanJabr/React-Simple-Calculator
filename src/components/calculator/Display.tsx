import { CalculatorState } from '@/lib/logic';

interface DisplayProps {
    state: CalculatorState;
    opString?: string;
}

function getOperationString(state: CalculatorState) {
    if (state.total && state.operation && state.next) {
        return `${state.total} ${state.operation} ${state.next}`;
    }
    if (state.total && state.operation) {
        return `${state.total} ${state.operation}`;
    }
    if (state.total) {
        return `${state.total}`;
    }
    return '';
}

export default function Display({ state, opString }: DisplayProps) {
    const value = state.next || state.total || '0';
    const operationString = opString !== undefined ? opString : getOperationString(state);
    return (
        <div className="bg-gray-800 text-white rounded-t-lg">
            <div className="px-4 pt-2 text-right text-md text-gray-400" style={{ minHeight: '1.5em' }}>
                {operationString || <span>&nbsp;</span>}
            </div>
            <div className="p-4 text-right text-4xl font-bold">
                {value}
            </div>
        </div>
    );
} 