import React, { useState } from "react";
import Alert from "./Alert";

const Edad = () => {
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState("Enero");
  const [day, setDay] = useState(1);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const restoreMessageAndError = () => {
    setTimeout(() => {
      setError(false);
      setMessage("");
    }, 3000);
  };

  const handleChangeMonth = (e) => {
    const selection = e.target.value;
    console.log("Selected!!", month);
    setMonth(selection);
  };

  const handleChangeYear = (e) => {
    const selection = e.target.value;
    console.log("Selected!!", month);
    setYear(selection);
  };

  const handleChangeDay = (e) => {
    const selection = e.target.value;
    console.log("Selected!!", month);
    if (selection > 31 || selection < 1) {
      setMessage("Lo sentimos pero ese dia no existe");
      setError(true);
      restoreMessageAndError();
      return;
    }
    setDay(selection);
  };

  const handleValidation = () => {
    if (year > 2004) {
      setMessage("Lo sentimos pero eres menor de edad");
      setError(true);
      restoreMessageAndError();
    } else {
      setMessage("Bienvenido");
      setError(true);
      restoreMessageAndError();
    }
  };

  const months = [
    { value: "Enero" },
    { value: "Febrero" },
    { value: "Marzo" },
    { value: "Abril" },
  ];

  return (
    <div>
      <h2>Escriba su edad</h2>
      <input
        data-testid="year"
        type="number"
        value={year}
        onChange={(e) => {
          handleChangeYear(e);
        }}
      />
      <select
        value={month}
        onChange={(e) => {
          handleChangeMonth(e);
        }}
      >
        {months.map((option, i) => (
          <option key={i} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <input
        data-testid="day"
        type="number"
        value={day}
        onChange={(e) => {
          handleChangeDay(e);
        }}
      />
      <button onClick={handleValidation}>Enviar</button>

      <br />
      {error && <Alert>{message} </Alert>}
    </div>
  );
};

export default Edad;
