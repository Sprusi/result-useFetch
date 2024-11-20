import style from "./app.module.css";
import { useToggle } from "./hooks/useToggle";

function App() {
  const [value, toggle] = useToggle(["light", "dark"]);

  return (
    <>
      <p>{value.toString()}</p>
      <button onClick={() => toggle()}>toggle</button>
      <button onClick={() => toggle("dark")}>toggle("dark")</button>
    </>
  );
}

export default App;
