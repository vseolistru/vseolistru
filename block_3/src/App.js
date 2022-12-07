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
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
