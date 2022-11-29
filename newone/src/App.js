import './App.css';
import pic from './img/avatar.jpg'
import {Route, Routes} from 'react-router-dom'
import Start from "./components/Start";
import Nanigation from "./components/Nanigation";
import Fonts from "./components/Fonts";
import BlockElenent from "./components/BlockElenent";
import Links from "./components/Links";

function App() {
  return (

    <Routes>
        <Route path="/" element={<Nanigation/>}/>
        <Route path="/start" exact element={<Start/>}/>
        <Route path="/fonts" element={<Fonts/>}/>
        <Route path='/blocks' element={<BlockElenent/>}/>
        <Route path="/links" element={<Links/>}/>
    </Routes>
  );
}

export default App;
