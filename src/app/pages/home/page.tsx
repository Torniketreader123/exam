import { useState } from "react";


    const Header = () => {
      const [darkMode, setDarkMode] = useState(false);
    
      const handleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    
      return (
        <div className={`Home ${darkMode ? "darkMode" : ""}`}>
          <header>
            
            <button onClick={handleDarkMode}>darkMode</button>
            
          </header>
          
        </div>
      );
    };
    
    export default Header;
 