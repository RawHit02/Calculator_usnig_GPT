import React, { useState } from 'react';
import './calculators.css';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    switch (value) {
      case '=':
        try {
          setResult(eval(expression));
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'C':
        setExpression('');
        setResult('');
        break;
      default:
        setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{result || expression || '0'}</div>
      <div className="keypad">
        <button onClick={() => handleClick('C')} className="button clear">
          C
        </button>
        <button onClick={() => handleClick('/')} className="button operator">
          ÷
        </button>
        <button onClick={() => handleClick('*')} className="button operator">
          ×
        </button>
        <button onClick={() => handleClick('7')} className="button number">
          7
        </button>
        <button onClick={() => handleClick('8')} className="button number">
          8
        </button>
        <button onClick={() => handleClick('9')} className="button number">
          9
        </button>
        <button onClick={() => handleClick('-')} className="button operator">
          −
        </button>
        <button onClick={() => handleClick('4')} className="button number">
          4
        </button>
        <button onClick={() => handleClick('5')} className="button number">
          5
        </button>
        <button onClick={() => handleClick('6')} className="button number">
          6
        </button>
        <button onClick={() => handleClick('+')} className="button operator">
          +
        </button>
        <button onClick={() => handleClick('1')} className="button number">
          1
        </button>
        <button onClick={() => handleClick('2')} className="button number">
          2
        </button>
        <button onClick={() => handleClick('3')} className="button number">
          3
        </button>
        <button onClick={() => handleClick('=')} className="button equal">
          =
        </button>
        <button onClick={() => handleClick('0')} className="button number">
          0
        </button>
        <button onClick={() => handleClick('.')} className="button number">
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
