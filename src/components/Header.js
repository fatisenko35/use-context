import {useContext} from 'react';
import ThemeProvider from "../context/ThemeContext"

const Header = () => {
    const {theme, setTheme} = useContext(ThemeProvider)
  return (
    <div>
       Active Theme : {theme}
       <button onClick = {() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Header