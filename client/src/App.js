import { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import defaultAtomState from "./atom/index";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(defaultAtomState);
  const { firstName, lastName, email } = userInfo;

  const onInputChange = (event, key) => {
    setUserInfo({ ...userInfo, [key]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();

    if (firstName && lastName) {
      setIsSubmit(true);
    }
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        React testing cypress
        <div>
          First Name: <input type="text" id="firstName" onChange={event => onInputChange(event, "firstName")} value={firstName} />
        </div>
        <div>
          Last Name: <input type="text" id="lastName" onChange={event => onInputChange(event, "lastName")} value={lastName} />
        </div>
        <div>
          Email: <input type="text" id="email" onChange={event => onInputChange(event, "email")} value={email} />
        </div>
        <div>
          <input type="checkbox" id="checkbox" />
        </div>
        <button type="submit" id="submit">
          Submit
          {isSubmit && <div>form submitted</div>}
        </button>
      </form>

      <Link to="/about">Go to About</Link>
    </div>
  );
}

export default App;
