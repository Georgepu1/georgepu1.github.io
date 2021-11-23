import React from "react";

const themeColours = {
  light: {
    color: "#343434",
    backgroundColor: "#fefefe"
  },
  dark: {
    color: "#fff",
    backgroundColor: "#3f3f3f"
  }
};


const ThemeContext = React.createContext("light");

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = React.useState("light");

  React.useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log('hi 22');
    setTheme(darkOS ? "dark" : "light");
  }, []);

  const setTheme = (name) => {
    document.body.style.setProperty("--color", themeColours[name].color);
    document.body.style.setProperty(
      "--background-color",
      themeColours[name].backgroundColor
    );
    setThemeName(name);
  };
  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
