export default function Navbar(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}