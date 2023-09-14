//CONTEXT API USED TO SHARE DATA GLOBALLY IN COMPONENT TREE AS ALT TO PROPS
//Shared data(context) stored SEPARATELY and provided to component tree via CONTEXT PROVIDER

import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar/>
          <Booklist/>
          <ThemeToggle/>
        </ThemeContextProvider>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;


