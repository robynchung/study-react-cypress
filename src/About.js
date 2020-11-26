import { useRecoilState } from "recoil";
import defaultState from "./atom/index";

export default function About() {
  const [userInfo, setUserInfo] = useRecoilState(defaultState);

  console.log(userInfo);
  return <>About</>;
}
