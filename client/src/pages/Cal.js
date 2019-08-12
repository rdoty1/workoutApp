import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";

class Cal extends Component {
  state = {
    date: new Date(),
    workout: "Arms",
    exercises: [{
      exercise: "Bicep Curls",
      sets: 4,
      reps: 10
    }, {
      exercise: "Hammer Curls",
      sets: 4,
      reps: 10

    },{
      exercise: "Dumbbell Rows",
      sets: 4,
      reps: 10

    },{
      exercise: "Cable Rows",
      sets: 4,
      reps: 10

    },{
      exercise: "Reverse Curls",
      sets: 4,
      reps: 10

    },{
      exercise: "LAT Pulldown",
      sets: 4,
      reps: 10

    },{
      exercise: "Seated",
      sets: 4,
      reps: 10

    }],
  }
 
  handleChange = date => this.setState({ date })
  
 
  render() {
    return (
      <div>

        <Jumbotron>
            <h1>Find Today's Workout</h1>
        </Jumbotron>

       
        

        <Calendar
          handleChange={this.handleChange}
          value={this.state.date}
         
        />

        <Container>
        <p> 
          {this.state.exercises.map(exercise =>

            <Col size="md-6">
              <div>
                <h2>Exercise: {exercise.exercise} 

                    {exercise.sets}
                    {exercise.reps}
                    
                </h2>

                
              </div>
            </Col>
          )}

        
        </p>
        </Container>

        <Footer>
          <div className="foot">
            THIS IS OUR PROJECT
          </div>
        </Footer>
      </div>
    );
  };
};




export default Cal;