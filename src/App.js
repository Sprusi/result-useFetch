import style from "./app.module.css";
import { useHover } from "./hooks/useHover.js";

function App() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}
    </div>
  );
}

export default App;
