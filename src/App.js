import React, { useState } from "react";
import "./reset.css";
import "./App.css";

// Components imports
import Form from "./components/Form";
import Footer from "./components/Footer";
import StepTwo from "./components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [step, setStep] = useState(1);
  const [wrongPass, setWrongPass] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirm) {
      setWrongPass(true);
    } else {
      setWrongPass(false);
      setStep(2);
    }
  };

  return (
    <div>
      {step === 1 ? <h1>Create Account</h1> : <h1>Results </h1>};
      {step === 1 ? (
        <Form
          handleSubmit={handleSubmit}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirm={setConfirm}
          name={name}
          email={email}
          password={password}
          confirm={confirm}
          wrongPass={wrongPass}
        />
      ) : (
        <StepTwo
          setStep={setStep}
          name={name}
          email={email}
          password={password}
        />
      )}
      ;
      <Footer />
    </div>
  );
}

export default App;
