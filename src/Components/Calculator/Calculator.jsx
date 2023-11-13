/* The code is a React component called "Calculator". It imports the necessary dependencies, such as
React and useState from the "react" library, and mathjs for mathematical calculations. */

/* The code is importing necessary dependencies and libraries for the React component "Calculator". */
import React, { useState } from "react";
import "./Calculator.css";
import * as math from "mathjs";

/**
 * The Calculator function is a basic calculator component in JavaScript React that allows users to
 * input numbers and perform basic arithmetic operations.
 * @returns The function `Calculator` returns a JSX element representing a basic calculator.
 */
function Calculator() {
  /* The code `const [input, setInput] = useState("");` and `const [result, setResult] = useState("");`
 are using the `useState` hook from React to create state variables in the `Calculator` component. */
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  /**
   * The function `handleButtonClick` updates the input state by appending the provided value to the
   * previous input value.
   */
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  /**
   * The handleClear function clears the input and result values.
   */
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  /**
   * The function `handleCalculate` evaluates a mathematical expression and sets the result
   * accordingly.
   */
  const handleCalculate = () => {
    /* The code block is handling the calculation of the mathematical expression entered by the user. */
    try {
      /* The code block is handling the calculation of the mathematical expression entered by the user. */
      const calculationResult = math.evaluate(input);

      if (isNaN(calculationResult)) {
        setResult("Invalid input");
      } else {
        setResult(calculationResult);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    /* The code represents the JSX structure of a basic calculator component in a React application. It
    consists of a main container div with the class name "calculator". Inside this container, there
    are three main sections: "calNav", "calCont", and "buttons". */
    <div className="calculator">
      <div className="calNav">
        <p>Basic Calculator</p>
      </div>

      <div className="calCont">
        <div className="input-display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="result-display">
          <span>= {result}</span>
        </div>

        {/* /* The code represents the JSX structure of the buttons section in a basic calculator
        component. It consists of four rows, each containing four buttons. Each button has an
        `onClick` event handler that calls a specific function when clicked. The functions are
        defined in the `Calculator` component and are responsible for updating the input state based
        on the button clicked. */}
        <div className="buttons">
          <div className="row">
           {/* These lines of code represent the JSX structure of the buttons section in a basic
           calculator component. Each button has an `onClick` event handler that calls a specific
           function when clicked. */}
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleClear()}>C</button>
          </div>
          <div className="row">
            {/* These lines of code represent the JSX structure of the buttons section in a basic
            calculator component. Each button has an `onClick` event handler that calls the
            `handleButtonClick` function with a specific value when clicked. The `handleButtonClick`
            function updates the input state by appending the provided value to the previous input
            value. So, when a button is clicked, it adds the corresponding number (8, 5, 2, or 0) to
          the input value of the calculator. */}
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("0")}>0</button>
          </div>
          <div className="row">
           {/* These lines of code represent the JSX structure of the buttons section in a basic
           calculator component. Each button has an `onClick` event handler that calls a specific
          function when clicked. */}
            <button onClick={() => handleButtonClick("9")}>8</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("9")}>3</button>
            <button onClick={() => handleCalculate()}>=</button>
          </div>
          <div className="row">
           {/* These lines of code represent the JSX structure of the buttons section in a basic
           calculator component. Each button has an `onClick` event handler that calls the
           `handleButtonClick` function with a specific value when clicked. */}
            <button onClick={() => handleButtonClick("*")}>*</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
            <button onClick={() => handleButtonClick("+")}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
