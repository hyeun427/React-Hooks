import { useEffect, useRef, useState } from "react";

export default function UseRefCompo4() {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const onClickLogin = () => {
    alert(`환영합니다! ${inputRef.current.value}!`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="username" ref={inputRef} />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
