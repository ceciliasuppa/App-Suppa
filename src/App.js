import './App.css';
import "./Components/NavBar/NavBar.css";
import  {NavBar} from "./Components/NavBar/NavBar";
import {Footer} from "./Components/Footer.js";
import {ItemListContainer} from "./Components/ItemListContainer.js";
// import {ItemCount} from "./Components/ItemCount.js"


function App() {

  return (
    <><div className="App">
      <NavBar />
      <ItemListContainer />
      <body className="body">
      </body>
    </div>
    <Footer /></>
  );
}

export default App;


