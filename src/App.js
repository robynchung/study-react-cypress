import { useState } from "react";
import { useRecoilState } from "recoil";
import defaultAtomState from "./atom/index";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(defaultAtomState);

  const onInputChange = (event, func) => {
    func(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    if (firstName && lastName) {
      setIsSubmit(true);
    }
  };

  const { firstName, lastName, email } = userInfo;

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
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
        <div>
          <input type="checkbox" id="checkbox" />
        </div>
        <button type="submit" id="submit">
          Submit
          {isSubmit && <div>form submitted</div>}
        </button>
      </form>
    </div>
  );
}

export default App;
