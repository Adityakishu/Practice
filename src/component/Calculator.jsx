import React, { useState, useEffect } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [currentInput, setCurrentInput] = useState('0');
  const [previousInput, setPreviousInput] = useState('');
  const [operation, setOperation] = useState(null);

  const updateDisplay = (input) => {
    document.getElementById('display').textContent = input;
  };

  useEffect(() => {
    updateDisplay(currentInput);
  }, [currentInput]);

  const handleDigitClick = (digit) => {
    if (currentInput === '0' || currentInput === '') {
      setCurrentInput(digit);
    } else {
      setCurrentInput(currentInput + digit);
    }
  };

  const handleOperationClick = (op) => {
    if (currentInput === '' && op !== '-') return; 

    if (currentInput !== '') {
      if (previousInput !== '') {
        setCurrentInput(operate(previousInput, currentInput, operation));
      }
      setPreviousInput(currentInput);
      setCurrentInput('');
    }
    setOperation(op);
  };

  const handleEqualsClick = () => {
    if (currentInput !== '' && previousInput !== '' && operation !== null) {
      setCurrentInput(operate(previousInput, currentInput, operation));
      setPreviousInput('');
      setOperation(null);
    }
  };

  const handleClearClick = () => {
    setCurrentInput('0');
    setPreviousInput('');
    setOperation(null);
  };

  const handleDecimalClick = () => {
    if (!currentInput.includes('.')) {
      setCurrentInput(currentInput + '.');
    }
  };

  const operate = (num1, num2, op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return '';

    let result;
    switch (op) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '×':
        result = a * b;
        break;
      case '÷':
        result = a / b;
        break;
      default:
        return '';
    }
    return result.toString();
  };


  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <div className="display" id="display">0</div>
        <button className="btn clear" id="clear" onClick={handleClearClick}>CLR</button>
        <button className="btn" data-operation="÷" onClick={() => handleOperationClick('÷')}>÷</button>
        <button className="btn" data-operation="×" onClick={() => handleOperationClick('×')}>×</button>
        <button className="btn" data-operation="-" onClick={() => handleOperationClick('-')}>-</button>
        <button className="btn" data-operation="+" onClick={() => handleOperationClick('+')}>+</button>
        <button className="btn" data-digit="7" onClick={() => handleDigitClick('7')}>7</button>
        <button className="btn" data-digit="8" onClick={() => handleDigitClick('8')}>8</button>
        <button className="btn" data-digit="9" onClick={() => handleDigitClick('9')}>9</button>
        <button className="btn" data-digit="4" onClick={() => handleDigitClick('4')}>4</button>
        <button className="btn" data-digit="5" onClick={() => handleDigitClick('5')}>5</button>
        <button className="btn" data-digit="6" onClick={() => handleDigitClick('6')}>6</button>
        <button className="btn" data-digit="1" onClick={() => handleDigitClick('1')}>1</button>
        <button className="btn" data-digit="2" onClick={() => handleDigitClick('2')}>2</button>
        <button className="btn" data-digit="3" onClick={() => handleDigitClick('3')}>3</button>
        <button className="btn" data-digit="0" onClick={() => handleDigitClick('0')}>0</button>
        <button className="btn" data-decimal="." onClick={handleDecimalClick}>.</button>
        <button className="btn equals" id="equals" onClick={handleEqualsClick}>=</button>
      </div>
    </div>


  );
}
