import { useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  // 생각하는 시간
  for (let i = 0; i < 99999999999; i++) return number + 10000;
};

const easyCalculate = (number) => {
  console.log("짱 쉬운 계산!!");
  return number + 1;
};

export default function UseMemoCompo1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(event) => {
          setHardNumber(parseInt(event.target.value));
        }}
      />
      <span> + 10000 = {hardSum} </span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(event) => {
          setEasyNumber(parseInt(event.target.value));
        }}
      />
      <span> + 1 = {easySum} </span>
    </div>
  );
}
