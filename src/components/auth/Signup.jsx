import React, { useState } from "react";
import style from "../app.module.css";
import { TextInput } from "../text-input/TextInput";

export const Signup = ({ onSubmit }) => {
  const initValues = {
    name: "",
    niсkName: "",
    email: "",
    password: "",
    repitPassport: "",
  };
  const [inputs, setInputs] = useState(initValues);
  const [gender, setGender] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleInputChange = (e) =>
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  return (
    <form
      className={style.form}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ ...inputs, gender });
      }}
    >
      <h1 className={style.formTitle}>{"Зарегаться"}</h1>

      <TextInput
        required
        label={"Имя"}
        name={"name"}
        value={inputs.name}
        onChange={handleInputChange}
      />
      <TextInput
        required
        label={"Ник"}
        name={"niсkName"}
        value={inputs.niсkName}
        onChange={handleInputChange}
      />
      <TextInput
        required
        label={"Почта"}
        name={"email"}
        type={"email"}
        value={inputs.email}
        onChange={handleInputChange}
      />
      <fieldset>
        <legend>Пол:</legend>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleGenderChange}
          />
          <label for="male">Мущина</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleGenderChange}
          />
          <label for="female">Женщина</label>
        </div>
      </fieldset>
      <TextInput
        required
        label={"Пароль"}
        name={"password"}
        type={"password"}
        value={inputs.password}
        onChange={handleInputChange}
      />
      <TextInput
        required
        label={"Повторить пароль"}
        name={"repitPasswort"}
        type={"password"}
        value={inputs.repitPassword}
        onChange={handleInputChange}
      />

      <button className={style.formButton}> {"Войти"}</button>
    </form>
  );
};
