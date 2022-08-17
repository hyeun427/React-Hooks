import { useReducer, useState } from "react";

// redecer - state를 업데이트 해주는 역할
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  // 일반적으로 action안의 type에 따라서 다르게 state를 업데이트를 해주어야
  // 할 경우가 많기 때문에 if..else문이나 switch문을 쓴다.
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

export default function UseReducerCompo1() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useRedecer 은행에 오신 것을 환영합니다!!~~!~!!</h2>
      <p>잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(parseInt(event.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}
