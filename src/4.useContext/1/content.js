import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { UserContext } from "../context/userContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "pink",
        color: isDark ? "pink" : "black",
      }}
    >
      <p>{user}님, 좋은 하루 되세요.</p>
    </div>
  );
};

export default Content;
