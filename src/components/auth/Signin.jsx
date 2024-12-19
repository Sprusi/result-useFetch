import React, { useState } from "react";
import style from "../app.module.css";
import { TextInput } from "./text-input/TextInput";

export const Signin = ({ onSubmit }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  return (
    <form
      className={style.form}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ emailValue, passValue });
      }}
    >
      <h1 className={style.formTitle}>{"Войти"}</h1>

      <TextInput
        label={"Email"}
        required
        value={emailValue}
        type="email"
        onChange={(e) => setEmailValue(e.target.value)}
      />

      <TextInput
        label={"Password"}
        required
        value={passValue}
        type="password"
        onChange={(e) => setPassValue(e.target.value)}
      />

      <button className={style.formButton}> {"Войти"}</button>
    </form>
  );
};
