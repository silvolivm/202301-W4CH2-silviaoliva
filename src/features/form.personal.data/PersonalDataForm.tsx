import { useState } from "react";
import { NextAndPrevButtons } from "../form.button/NextAndPrevButtons";

type PersonalData = {
  name: string;
  lastname: string;
  birthdate: string;
  gender: string;
  email: string;
  newsletter: boolean;
};

export function PersonalDataForm({
  currentForm,
  setCurrentForm,
}: {
  currentForm: number;
  setCurrentForm: any;
}) {
  const personaldata: PersonalData = {
    name: "",
    lastname: "",
    birthdate: "",
    gender: "",
    email: "",
    newsletter: false,
  };

  const [userAge, setUserAge] = useState("Enter a year");

  const [form, setForm] = useState(personaldata);

  const handlerSubmit = (ev: any) => {
    ev.preventDefault();
    console.log("Enviando Personal Data Form...");
    setCurrentForm(1);
  };

  const handleForm = (ev: any) => {
    const element = ev.target as HTMLFormElement;
    console.log(element.name);
    setForm({
      ...form,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value,
    });
    console.log("handleform");
  };

  const calcCurrentAge: any = (calendarValue: string) => {
    const newUserDate = calendarValue.split("-");
    const years = newUserDate[0];
    const months = newUserDate[1];
    const days = newUserDate[2];
    const currentDate = new Date().toISOString().slice(0, 10);
    const currentDateSplit = currentDate.split("-");
    const currentYears = currentDateSplit[0];
    const currentMonths = currentDateSplit[1];
    const currentDays = currentDateSplit[2];
    const totalInDays =
      Number(years) * 365 + Number(months) * 30 + Number(days);
    const currentTotalInDays =
      Number(currentYears) * 365 +
      Number(currentMonths) * 30 +
      Number(currentDays);

    const daysDifference = currentTotalInDays - totalInDays;
    const daysToYears = daysDifference / 365;
    if (daysDifference < 365) {
      return "Less than a year";
    }

    if (daysDifference > 365) {
      return `Age is ${daysToYears.toFixed(0)}`;
    }
  };

  return (
    <>
      <div className="form__container">
        <form onSubmit={handlerSubmit}>
          <legend>
            <span className="form__title">Personal Data Form</span>
          </legend>
          <div className="form__container__element">
            <label>
              <input
                type="text"
                name="name"
                value={form.name}
                onInput={handleForm}
                placeholder="Enter your name"
              />
            </label>
          </div>
          <div className="form__container__element">
            <label>
              <input
                type="text"
                name="lastname"
                value={form.lastname}
                onInput={handleForm}
                placeholder="Enter your last name"
              />
            </label>
          </div>
          <div className="form__container__element">
            <label>
              <input
                type="date"
                name="birthdate"
                value={form.birthdate}
                onInput={(e: any) => {
                  handleForm(e);
                  calcCurrentAge(e.target.value);
                  setUserAge(calcCurrentAge(e.target.value));
                }}
              />
              <span className="user__age">{userAge}</span>
            </label>
          </div>
          <div className="form__container__element">
            <fieldset>
              <legend>Choose your gender</legend>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onInput={handleForm}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onInput={handleForm}
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onInput={handleForm}
                />{" "}
                Other
              </label>
            </fieldset>
          </div>
          <div className="form__container__element">
            <label>
              <input
                type="email"
                name="email"
                value={form.email}
                onInput={handleForm}
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div className="form__container__element">
            <label>
              <input type="checkbox" name="newsletter" onChange={handleForm} />{" "}
              Do you wish to receive news from our newsletter?
            </label>
          </div>
          <div></div>
        </form>
      </div>
      <div>
        <NextAndPrevButtons
          currentForm={currentForm}
          setCurrentForm={setCurrentForm}
          form={form}
        />
      </div>
    </>
  );
}
