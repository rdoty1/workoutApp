import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import { Col, Row, Container } from "./components/Grid";
import Footer from "./components/Footer"
import { Input, TextArea, FormBtn } from "./components/Form";
import {Form} from "./components/Form"
import HomePage from "../src/pages/Homepage"
import WorkoutProgramPick from './pages/WorkoutProgramPick';
import Cal from './pages/Calender';



function App() {

  return (
    <Router>

      <div>

        <Route exact path="/" component={HomePage}/>
        <Route exact path="/programpicker" component={WorkoutProgramPick}/>
        <Route exact path="/calender" component={Cal}/>



      </div>




    </Router>
    
  )
}


export default App;
