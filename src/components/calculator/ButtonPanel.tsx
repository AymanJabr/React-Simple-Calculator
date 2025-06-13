import Button from './Button';

interface ButtonPanelProps {
    clickHandler: (name: string) => void;
}

export default function ButtonPanel({ clickHandler }: ButtonPanelProps) {
    return (
        <div className="grid grid-cols-4 gap-px bg-gray-600">
            <Button name="AC" clickHandler={clickHandler} color="gray" />
            <Button name="+/-" clickHandler={clickHandler} color="gray" />
            <Button name="%" clickHandler={clickHandler} color="gray" />
            <Button name="÷" clickHandler={clickHandler} color="orange" />

            <Button name="7" clickHandler={clickHandler} />
            <Button name="8" clickHandler={clickHandler} />
            <Button name="9" clickHandler={clickHandler} />
            <Button name="×" clickHandler={clickHandler} color="orange" />

            <Button name="4" clickHandler={clickHandler} />
            <Button name="5" clickHandler={clickHandler} />
            <Button name="6" clickHandler={clickHandler} />
            <Button name="-" clickHandler={clickHandler} color="orange" />

            <Button name="1" clickHandler={clickHandler} />
            <Button name="2" clickHandler={clickHandler} />
            <Button name="3" clickHandler={clickHandler} />
            <Button name="+" clickHandler={clickHandler} color="orange" />

            <Button name="0" clickHandler={clickHandler} wide />
            <Button name="." clickHandler={clickHandler} />
            <Button name="=" clickHandler={clickHandler} color="orange" />
        </div>
    );
} 