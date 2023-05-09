import { useState, createContext } from "react";

let ThemeContext = createContext();

function ThemeProvider({ children }) {
    let themeList = ['dark', 'light'];
    let [ theme, setTheme ] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{ children }</ThemeContext.Provider>
    )
};

export { ThemeContext, ThemeProvider };