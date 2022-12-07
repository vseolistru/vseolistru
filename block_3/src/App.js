import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Navigation from "./Components/Nav/Navigation";
import LessonFirst from "./Components/LessonFirst/LessonFirst";
import FormLesson from "./Components/Form/FormLesson";
import DateForm from "./Components/Date-Form/DateForm";
import Filter from "./Components/Filter/Filter";
import Semantic from "./Components/Semantic/Semantic";
import Footer from "./Components/Footer/Footer";
import Transformation from "./Components/Transformation/Transformation";
import Animation from "./Components/Animation/Animation";
import Adaptive from "./Components/Adaptive/Adaptive";

function App() {
  return (
    <div>
        <nav>
            <Navigation/>
        </nav>
        <div className='App'>
          <Routes>
            <Route path="/lesson_1" element={<LessonFirst/>}/>
            <Route path="/form" element={<FormLesson/>}/>
            <Route path="/dateform" element={<DateForm/>}/>
            <Route path="/filters" element={<Filter/>}/>
            <Route path="semantic" element={<Semantic/>}/>
            <Route path="/transform" element={<Transformation/>}/>
            <Route path="/animation" element={<Animation/>}/>
            <Route path="/adaptive" element={<Adaptive/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
