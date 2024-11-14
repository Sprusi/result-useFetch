import style from "./app.module.css";
import { useWindowScroll } from "./hooks/useWindowScroll";

function App() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div style={{height: 2000, width: 1000}}>
      <p style={{margin: '30px 0 0 0'}}>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}

export default App;
