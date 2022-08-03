import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  margin: 50px;
  padding: 50px;
  border: 1px solid blue;
`;

const Time = styled.span`
  font-size: large;
  font-weight: 700;
`;

const Btn = styled.button`
  margin-left: 20px;
`;

const heavyWork = () => {
  console.log("엄청 무거운 작업을 한드앙");
  return ["지민쓰", "정국쓰"];
};

export default function UseStateCompo2() {
  // 초기값을 가져올 때 무거운 작업을 해야한다면 useState()의 괄호 안에 콜백을 넣어주면
  // 매번 렌더링 되지 않고 처음 한번만 렌더링된다!
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  console.log(input);

  const handleUpload = () => {
    setNames((prev) => {
      return [input, ...prev];
    });
  };
  return (
    <Wrapper>
      <div>예제 2</div>
      <input type="text" value={input} onChange={handleInputChange} />
      <Btn onClick={handleUpload}>Upload</Btn>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </Wrapper>
  );
}
