import style from "./app.module.css";
import { useViewportSize } from "./hooks/useViewportSize";

function App() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}

export default App;
