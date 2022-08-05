import { useState } from "react";
import Page from "./page";
import { ThemeContext } from "../context/themeContext";
import { UserContext } from "../context/userContext";

export default function UseContextCompo1() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
