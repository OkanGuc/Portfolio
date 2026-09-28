import React , {createContext,useContext,useEffect, useState} from 'react';

const ThemeContext = createContext();

export const UseTheme = () => useContext(ThemeContext);

const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(getInitialTheme);
    useEffect(()=>{
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme);
    },[theme]);
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
