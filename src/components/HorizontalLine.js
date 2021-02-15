export default function HorizontalLine({ type }) {
  return type ? (
    <div className={`Horizontal-Line Horizontal-Line-${type}`}></div>
  ) : null;
}
