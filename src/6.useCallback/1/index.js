import { useCallback, useState } from "react";
import Box from "../2/box";

export default function UseCallbackCompo1() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "lightgreen",
      width: `${size}px`,
      height: `${size}px`,
      margin: "50px",
    };
  }, [size]);

  return (
    <div
      style={{
        background: isDark ? "black" : "white",
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(event) => setSize(event.target.value)}
      />

      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}


