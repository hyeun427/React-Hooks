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

export default function UseStateCompo1() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    // setTime(time + 1);
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  return (
    <Wrapper>
      <div>예제 1</div>
      <Time>현재 시각 : {time}시</Time>
      <Btn onClick={handleClick}>Update</Btn>
    </Wrapper>
  );
}
