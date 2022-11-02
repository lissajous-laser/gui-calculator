export default function Key(props) {
  function updateExp(symbol) {
    props.addToExp(symbol);
  }

  return (
    <button
      id={props.id}
      className={props.className}
      onClick={(event) =>
        updateExp(
          event.target.innerHTML === "×"
            ? "*"
            : event.target.innerHTML === "÷"
            ? "/"
            : event.target.innerHTML
        )
      }
    >
      {props.symbol === "*" ? "×" : props.symbol === "/" ? "÷" : props.symbol}
    </button>
  );
}


