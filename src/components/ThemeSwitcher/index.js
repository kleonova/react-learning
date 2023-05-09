import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function ThemeSwitcher() {
    let { theme, setTheme } = useContext(ThemeContext);

    let handleChange = (event) => {
        setTheme(event.target.value);
    }

    return (
        <div className="d-flex">
            <div className="custom-control custom-radio custom-control-inline pe-2">
                <input 
                    type="radio" 
                    name="theme" 
                    id="darkTheme" 
                    className="custom-control-input" 
                    value='dark'
                    checked={ theme === 'dark' }
                    onChange={ handleChange }
                />
                <label className="custom-control-label ms-1" htmlFor="darkTheme">dark</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input 
                    type="radio" 
                    name="theme" 
                    id="lightTheme" 
                    className="custom-control-input" 
                    value='light'
                    checked={ theme === 'light' }
                    onChange={ handleChange }
                />
                <label className="custom-control-label ms-1" htmlFor="lightTheme">light</label>                        
            </div>
        </div>
    );
};

export default ThemeSwitcher;