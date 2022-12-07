import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Navigation from "./Components/Nav/Navigation";
import LessonFirst from "./Components/LessonFirst/LessonFirst";
import FormLesson from "./Components/Form/FormLesson";
import DateForm from "./Components/Date-Form/DateForm";
import Filter from "./Components/Filter/Filter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Navigation/>}/>
        <Route path="/lesson_1" element={<LessonFirst/>}/>
        <Route path="/form" element={<FormLesson/>}/>
        <Route path="/dateform" element={<DateForm/>}/>
        <Route path="/filters" element={<Filter/>}/>
      </Routes>
    </div>
  );
}

export default App;
