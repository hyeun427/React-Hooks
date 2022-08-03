import { useEffect, useState } from "react";

export default function UseEffectCompo1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onChangeInput = (event) => {
    setName(event.target.value);
  };

  // 렌더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log("렌더링 될 때마다!");
  });

  // 마운트 시 + 의존성배열 바뀔 때만 실행됨
  useEffect(() => {
    console.log("count 변화될 때만 렌더!");
  }, [count]);

  // 마운트 될 때만 실행됨
  useEffect(() => {
    console.log("마운트 될 때만 렌더!");
  }, []);

  return (
    <div>
      <button onClick={onClickCountUp}>Update</button>
      <span>count : {count}</span>
      <br />
      <input type="text" value={name} onChange={onChangeInput} />
      <span>name : {name}</span>
    </div>
  );
}
