export function NextAndPrevButtons({
  currentForm,
  setCurrentForm,
  form,
}: {
  currentForm: number;
  setCurrentForm: any;
  form: any;
}) {
  return (
    <div>
      {" "}
      <button
        type="button"
        disabled={currentForm === 0 ? true : false}
        onClick={() => {
          if (
            form.birthdate === true &&
            form.email === true &&
            form.gender === true &&
            form.lastname === true &&
            form.name === true &&
            form.newsletter === true
          ) {
            setCurrentForm(currentForm++);
          }
        }}
      >
        Previous Form
      </button>
      <button
        type="button"
        onClick={() => {
          if (
            form.birthdate.length > 2 &&
            form.email.length > 2 &&
            form.gender.length > 2 &&
            form.lastname.length > 2 &&
            form.name.length > 2 &&
            form.newsletter === true
          ) {
            setCurrentForm(currentForm++);
          }
        }}
      >
        Next Form
      </button>
    </div>
  );
}
