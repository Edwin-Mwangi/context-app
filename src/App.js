//CONTEXT API USED TO SHARE DATA GLOBALLY IN COMPONENT TREE AS ALT TO PROPS
//Shared data(context) stored SEPARATELY and provided to component tree via CONTEXT PROVIDER

import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Booklist/>
    </div>
  );
}

export default App;


