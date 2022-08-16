import { memo } from "react";

const Child = ({ name, age }) => {
  console.log("자녀도 렌더링이 되었습니다!");
  return (
    <div
      style={{
        border: "2px solid powderblue",
        padding: "10px",
        margin: "30px",
      }}
    >
      <h3>자식 컴포!</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
};

export default memo(Child);
