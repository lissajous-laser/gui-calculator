export default function Display(props) {
  return (
    <div id="display">
      <h3>{props.value.replace(/\//g, "÷").replace(/\*/g, "×")}</h3>
    </div>);
}