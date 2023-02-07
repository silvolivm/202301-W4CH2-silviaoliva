import { SyntheticEvent, useState } from "react";
import "./form1.scss";

type User = {
  date: string | undefined;
  name: string;
  lastName: string;
  data: number;
  mail: string;
  isOk: boolean;
};

export function Formulario() {
  const user: User = {
    name: "",
    lastName: "",
    data: 0,
    mail: "",
    isOk: false,
    date: undefined,
  };

  const [form, setForm] = useState(user);

  const handlerSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log("Enviando");
  };

  const handleForm = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    setForm({
      ...form,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value,
    });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <legend>Formulario</legend>
      <div>
        <input
          type="text"
          name="name"
          value={form.name}
          onInput={handleForm}
          placeholder="Dime tu nombre"
        />
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onInput={handleForm}
          placeholder="Dime tu apellido"
        />
      </div>
      <div>
        <input
          type="text"
          name="year"
          datatype={form.date}
          onInput={handleForm}
          placeholder="Dime tu año de nacimiento"
        />
      </div>
      <div>
        <input
          type="text"
          name="mail"
          value={form.mail}
          onInput={handleForm}
          placeholder="E-mail"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="isOk"
            checked={form.isOk}
            onChange={handleForm}
          />{" "}
          ¿Desea recibir información de nuestra newsletter?
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
