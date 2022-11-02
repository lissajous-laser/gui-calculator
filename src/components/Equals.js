export default function Equals(props) {
  return (
    <button id="equals" symbol="=" className="op" onClick={props.evalExp}>
      =
    </button>
  );
}