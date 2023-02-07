import { useState } from "react";
import { PersonalDataForm } from "../../../features/form.personal.data/PersonalDataForm";

function App() {
  const [currentForm, setCurrentForm] = useState(0);
  console.log(currentForm);

  return (
    <div className="App">
      {currentForm === 0 ? (
        <PersonalDataForm
          currentForm={currentForm}
          setCurrentForm={setCurrentForm}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
