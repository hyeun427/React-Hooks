import { useState } from "react";
import Child from "../2";

export default function ReactmemoCompo1() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const onClickParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const onClickChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("부모가 렌더링 되었습니다!");

  return (
    <div style={{ border: "2px solid navy", padding: "10px", margin: "30px" }}>
      <h1>부모 컴포!</h1>
      <p>age: {parentAge}</p>
      <br />
      <button onClick={onClickParentAge}>부모 나이 증가</button>
      <button onClick={onClickChildAge}>자식 나이 증가</button>
      <Child name={"홍길동"} age={childAge} />
    </div>
  );
}
