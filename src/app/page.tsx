'use client';

import { useState } from 'react';
import { calculate, CalculatorState } from '@/lib/logic';
import Display from '@/components/calculator/Display';
import ButtonPanel from '@/components/calculator/ButtonPanel';

interface HistoryEntry {
    expression: string;
    result: string;
}

export default function CalculatorPage() {
    const [state, setState] = useState<CalculatorState>({
        total: null,
        next: null,
        operation: null,
    });
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [lastOperation, setLastOperation] = useState<string>('');

    const handleClick = (buttonName: string) => {
        // Normalize button names for logic
        let normalized = buttonName;
        if (buttonName === '×') normalized = '*';
        if (buttonName === '÷') normalized = '/';

        if (normalized === '=') {
            if (state.total && state.operation && state.next) {
                const expression = `${state.total} ${state.operation} ${state.next}`;
                const result = calculate(state, '=').total || 'Error';
                setHistory([{ expression, result }, ...history]);
                setLastOperation(expression);
            }
        } else if (["+", "-", "*", "/", "%"].includes(normalized)) {
            setLastOperation('');
        } else if (/^[0-9]$/.test(normalized) || normalized === 'AC' || normalized === '+/-') {
            setLastOperation('');
        }
        setState(calculate(state, normalized));
    };

    const handleHistoryClick = (entry: HistoryEntry) => {
        setState({
            total: entry.result,
            next: null,
            operation: null,
        });
        setLastOperation(entry.expression);
    };

    return (
        <div className="flex flex-row items-center justify-center min-h-screen bg-gray-800 text-white">
            <div className="w-full max-w-md rounded-2xl shadow-2xl bg-gray-700 p-8">
                <Display state={state} opString={lastOperation || undefined} />
                <ButtonPanel clickHandler={handleClick} />
            </div>
            <div className="ml-12 w-96 bg-gray-900 rounded-2xl shadow-2xl p-6 h-[36rem] overflow-y-auto custom-scrollbar select-text">
                <h2 className="text-xl font-bold mb-4 text-gray-200">History</h2>
                <ul className="space-y-4">
                    {history.length === 0 && (
                        <li className="text-gray-500">No history yet.</li>
                    )}
                    {history.map((entry, idx) => (
                        <li
                            key={idx}
                            className="border-b border-gray-700 pb-2 break-words cursor-pointer hover:bg-gray-800 rounded transition"
                            onClick={() => handleHistoryClick(entry)}
                            title="Click to reuse this result"
                        >
                            <div className="text-gray-400 text-base truncate">{entry.expression}</div>
                            <div className="text-white text-xl font-bold truncate">= {entry.result}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 