import './App.css';
import {Route, Routes} from 'react-router-dom'
import Start from "./components/Start";
import Nanigation from "./components/Nanigation";
import Fonts from "./components/Fonts";
import BlockElenent from "./components/BlockElenent";
import Links from "./components/Links";
import Images from "./components/Images";
import Tables from "./components/Tables";
import BlockElems from "./components/BlockElems";
import Positions from "./components/Positions";
import FlexBox from "./components/FlexBox";

function App() {
  return (

    <Routes>
        <Route path="/" element={<Nanigation/>}/>
        <Route path="/start" exact element={<Start/>}/>
        <Route path="/fonts" element={<Fonts/>}/>
        <Route path='/blocks' element={<BlockElenent/>}/>
        <Route path="/links" element={<Links/>}/>
        <Route path="/images" element={<Images/>}/>
        <Route path="/tables" element={<Tables/>}/>
        <Route path="/blockelems" element={<BlockElems/>}/>
        <Route path="/position" element={<Positions/>}/>
        <Route path="/flex" element={<FlexBox/>}/>
    </Routes>
  );
}

export default App;
