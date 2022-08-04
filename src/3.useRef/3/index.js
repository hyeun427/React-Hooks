import { useEffect, useRef, useState } from "react";

export default function UseRefCompo3() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <div>
      <p>Count : {count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        올려!
      </button>
    </div>
  );
}
