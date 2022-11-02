export default function Clear(props) {
  return (
    <button id="clear" class="clear" symbol="C" onClick={props.clearMem}>
      C
    </button>
  );
}
