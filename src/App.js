import './App.css';
import "./Components/styles/NavBar.css";
import  {NavBar} from "./Components/utilities/NavBar/NavBar";
import {Footer} from "./Components/utilities/Footer.js";
import {ItemListContainer} from "./Components/containers/ItemListContainer.js";

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


