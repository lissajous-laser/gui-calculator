import "./App.css";
import "./scss/App.scss";
import React from "react";
import Display from "./components/Display";
import Equals from "./components/Equals";
import Clear from "./components/Clear";
import Key from "./components/Key";
import parseExp from "./functions/parseExp";
import multAndDiv from "./functions/multiAndDiv";
import addAndSub from "./functions/anddAndSub";

function myMathEval(str) {
  return addAndSub(multAndDiv(parseExp(str)));
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "0",
      replaceCurr: true, // indicates if current can be overwritten
      // by a new number
    };
    this.evalExp = this.evalExp.bind(this);
    this.addToExp = this.addToExp.bind(this);
    this.clearMem = this.clearMem.bind(this);
  }

  evalExp() {
    this.setState((state) => {

      if (/[/*+-]$/.test(state.current)) {
        return {};
      }

      return {
        current: myMathEval((state.current)).toString(),
        replaceCurr: true
      }});
  }

  addToExp(symbol) {
    this.setState(({ current, replaceCurr }) => {
      // non-decimal numbers cannot start with 0
      const idxLastChar = current.length - 1;
      if (
        (/[^\d.]0$/.test(current) || /^0$/.test(current)) &&
        /\d/.test(symbol)
      ) {
        return {
          current: current.slice(0, idxLastChar) + symbol,
          replaceCurr: false,
        };
      }

      /* entering consecutive operators applies only the second
      operator, unless the second operator is a minus (-) */
      if (/[/*+-]{2}$/.test(current) && /[/*+-]/.test(symbol)) {
        return {
          current: current.slice(0, idxLastChar - 1) + symbol,
        };
      } else if (/[/*+-]$/.test(current) && /[/*+]/.test(symbol)) {
        return {
          current: current.slice(0, idxLastChar) + symbol,
        };
      }

      // entering a number removes the result
      if (replaceCurr && /\d/.test(symbol)) {
        return { current: symbol, replaceCurr: false };
      }

      // two decimal points in a number not allowed
      if (/\.\d*$/.test(current) && symbol === ".") {
        return {};
      }

      return {
        current: current + symbol,
        replaceCurr: false,
      };
    });
  }

  clearMem() {
    this.setState({
      prev: "",
      current: "0",
    });
  }

  render() {
    const numbers = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    return (
      <div className="App">
        <div id="calculator">
          <Display value={this.state.current} />
          {numbers.map((x, y) => (
            <Key
              key={x}
              id={x}
              symbol={y}
              className="num"
              onClick={this.addToExp}
              addToExp={this.addToExp}
            />
          ))}
          <Equals evalExp={this.evalExp} />
          <Key id="add" symbol="+" className="op" addToExp={this.addToExp} />
          <Key
            id="subtract"
            symbol="-"
            className="op"
            addToExp={this.addToExp}
          />
          <Key
            id="multiply"
            symbol="*"
            className="op"
            addToExp={this.addToExp}
          />
          <Key
            id="divide"
            symbol="/"
            className="op"
            addToExp={this.addToExp}
          />
          <Key
            id="decimal"
            symbol="." 
            className="num"
            addToExp={this.addToExp}
          />
          <Clear clearMem={this.clearMem} />
        </div>
      </div>
    );
  }
}

export default App;

