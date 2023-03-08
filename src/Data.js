import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="col">
        <div className="form-control-1">
            <label>Name</label>
            <input
                type="text"
                name="text"
                value={state.text}
            />
            <label>Age</label>
            <input
                type="number"
                name="text"
                value={state.text}
            />
            <div className="form-control-1">
            <label>PatientId</label>
            <input
                type="Number"
                name="text"
                value={state.text}
            />
            </div>
            <label>Bloodgroup</label>
            <input
                type="text"
                name="text"
                value={state.text}
            />
            <label>Mobile no</label>
            <input
                type="text"
                name="text"
                value={state.text}
            />
            <label>Place</label>
            <input
                type="text"
                name="text"
                value={state.text}
            />
            <label>HealthIssues</label>
            <input
                type="text"
                name="text"
                value={state.text}
                // onChange={handleInputChange}
            />
        </div>
        </div>
        <div className="submit">
          <label></label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
