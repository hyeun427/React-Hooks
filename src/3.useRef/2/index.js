import { useRef, useState } from "react";

export default function UseRefCompo2() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const onClickRefUp = () => {
    countRef.current = countRef.current + 1;
    console.log("ref : ", countRef.current);
  };

  const onClickVarUp = () => {
    countVar = countVar + 1;
    console.log("var : ", countVar);
  };
  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더해랏</button>
      <button onClick={onClickRefUp}>Ref 올려</button>
      <button onClick={onClickVarUp}>Var 올려</button>
    </div>
  );
}
