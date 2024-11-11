import style from "./app.module.css";
import { useLocalStorage } from "./hooks/useLocalStorage.ts";

function App() {
  const [value, { setItem, removeItem }] = useLocalStorage("some-key");

  return (
    <div className={style.wrapper}>
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button onClick={() => setItem("new storage value")}>
          Задать значение
        </button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  );
}

export default App;
