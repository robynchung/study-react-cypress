import { useRecoilState } from "recoil";
import defaultState from "./atom/index";

export default function About() {
  const [userInfo] = useRecoilState(defaultState);

  console.log(userInfo);
  return <>About</>;
}
