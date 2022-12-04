import './App.css';
import {BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
              <Header/>
              <Nav/>
        </div>
      </BrowserRouter>
  );
}

export default App;
