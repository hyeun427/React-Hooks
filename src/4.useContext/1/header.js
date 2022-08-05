import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { UserContext } from "../context/userContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "pink" : "black",
      }}
    >
      <h1>Welcome {user}</h1>
    </header>
  );
};

export default Header;
