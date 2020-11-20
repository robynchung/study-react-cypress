import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailName] = useState("");

  return (
    <div className="App">
      <form>
        React testing cypress
        <div>
          First Name: <input type="text" onChange={event => setFirstName(event.target.name)} value={firstName} />
        </div>
        <div>
          Last Name: <input type="text" onChange={event => setLastName(event.target.name)} value={lastName} />
        </div>
        <div>
          Email: <input type="text" onChange={event => setEmailName(event.target.name)} value={email} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
