import { atom } from "recoil";

export default atom({
  key: "defaultState",
  default: {
    firstName: "",
    lastName: "",
    email: ""
  }
});
