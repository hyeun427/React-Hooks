import { useRef, useState } from "react";

export default function UseRefCompo1() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onClickCountRefUp = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };

  return (
    <div>
      <p>State : {count} </p>
      <p>Ref : {countRef.current} </p>
      <button onClick={onClickCountUp}>State를 올려랏</button>
      <button onClick={onClickCountRefUp}>Ref를 올려랏</button>
    </div>
  );
}
