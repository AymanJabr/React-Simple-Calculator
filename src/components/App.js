import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

import calculate from '../logic/calculate';

function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const {
      next: newNext,
      operation: newOperation,
      total: newTotal,
    } = calculate({ next, operation, total }, buttonName);

    setTotal(newTotal);
    setNext(newNext);
    setOperation(newOperation);
  };

  return (
    <>
      <Display total={total} next={next} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
}

export default App;
