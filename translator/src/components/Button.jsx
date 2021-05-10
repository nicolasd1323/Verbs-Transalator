import React from "react";

function Button(props) {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Dark Mode / White Mode
    </button>
  );
}
export default Button;

////  source to produce this button: https://www.code-boost.com/dark-mode-in-react/
////  Changes where made to adjust to my page and its features.
