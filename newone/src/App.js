import './App.css';
import pic from './img/avatar.jpg'
import {Route, Routes} from 'react-router-dom'
import Start from "./components/Start";
import Nanigation from "./components/Nanigation";
import Fonts from "./components/Fonts";

function App() {
  return (

    <Routes>
        <Route path="/" element={<Nanigation/>}/>
        <Route path="/start" exact element={<Start/>}/>
        <Route path="/fonts" element={<Fonts/>}/>
    </Routes>
  );
}

export default App;
