import style from "./app.module.css";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";

function App() {
  const finaly = (formData) => {
    let message = "Данные из формы:\n";
    for (let s in formData) message += ` ${s}: ${formData[s]}\n`;
    alert(message);
  };
  return (
    <div className={style.container}>
      {/* <Signin onSubmit={finaly} /> */}
      <Signup onSubmit={finaly}/>
    </div>
  );
}

export default App;
