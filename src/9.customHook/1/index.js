import { useInput } from "./useInput";

function displayMsg(msg) {
  alert(msg);
}

export default function CustomHookCompo1() {
  const [inputValue, handleChange, handleSubmit] = useInput("", displayMsg);

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}
