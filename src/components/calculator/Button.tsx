interface ButtonProps {
    name: string;
    clickHandler: (name: string) => void;
    wide?: boolean;
    color?: 'orange' | 'gray';
}

export default function Button({ name, clickHandler, wide = false, color = 'gray' }: ButtonProps) {
    const handleClick = () => clickHandler(name);

    const buttonClass = `p-4 text-2xl font-bold text-white ${color === 'orange' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-600 hover:bg-gray-700'
        } ${wide ? 'col-span-2' : ''}`;

    return (
        <button
            type="button"
            className={buttonClass}
            onClick={handleClick}
        >
            {name}
        </button>
    );
} 