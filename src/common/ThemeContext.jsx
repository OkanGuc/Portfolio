import React , {createContext,useContext,useEffect, useState} from 'react';

const ThemeContext = createContext();

export const UseTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState( 
        ()=> localStorage.getItem('theme') || 'light'
    );
    useEffect(()=>{
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme);
    },[theme]);
    const toggleTheme = () => {
        console.log('theme changer');
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
