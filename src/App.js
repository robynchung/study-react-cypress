import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailName] = useState("");

  const onInputChange = (event, func) => {
    func(event.target.value);
  };

  return (
    <div className="App">
      <form>
        React testing cypress
        <div>
          First Name: <input type="text" id="firstName" onChange={event => onInputChange(event, setFirstName)} value={firstName} />
        </div>
        <div>
          Last Name: <input type="text" id="lastName" onChange={event => onInputChange(event, setLastName)} value={lastName} />
        </div>
        <div>
          Email: <input type="text" id="email" onChange={event => onInputChange(event, setEmailName)} value={email} />
        </div>
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
