import style from "./app.module.css";
import { useFetch } from "./useFetch";

function App() {
  const { data, isLoading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className={style.wrapper}>
      <div className={style.buttons}>
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }
        >
          Перезапросить
        </button>
      </div>
      {isLoading && "Загрузка..."}
      {error && "Произошла ошибка"}
      {data &&
        !isLoading &&
        data?.map((item, i) => (
          <div key={item.id}>{`${i + 1}) ${item.title}`}</div>
        ))}
    </div>
  );
}

export default App;
