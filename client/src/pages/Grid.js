import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";

import { Col, Row, Container } from "../components/Grid";
import SetsForm from "../components/SetsForm"


// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid';

class Grids extends Component {

    constructor(props) {
        super(props);



        this.state = {

            data: [

                { workout: "Bicep Curls", sets: 4, reps: 10, difficulty: "Beginner" },
                { workout: "Hammer Curls", sets: 4, reps: 10, difficulty: "Intermediate" },
                { workout: "Dumbbell Rows", sets: 4, reps: 10, difficulty: "Intermediate" },
                { workout: "Cable Rows", sets: 4, reps: 10, difficulty: "Intermediate" },
                { workout: "Reverse Curls", sets: 4, reps: 10, difficulty: "Advanced" },
                { workout: "LAT Pulldown", sets: 4, reps: 10, difficulty: "Beginner" },
                { workout: "Seated Curls", sets: 4, reps: 10, difficulty: "Intermediate" },

            ],

            title: "Your Workout Page!",

        }
    }
    render() {

        return (


            <
            Container >

            <
            div className = "App" >
            <
            Jumbotron >
            <
            h1 className = "App-title" > { this.state.title } < /h1>

            <
            /Jumbotron>



            <
            Grid data = { this.state.data } >
            <
            GridColumn field = "workout"
            className = "workoutName"
            title = "Workout" / >
            <
            GridColumn field = "sets"
            className = "workoutName" / >
            <
            GridColumn field = "reps"
            className = "workoutName" / >
            <
            GridColumn field = "difficulty"
            className = "workoutName" / >
            <
            /Grid>





            <
            div className = { this.state.data[0].workout } > { this.state.data[0].workout } < /div>



            <
            /div>

            <
            /Container>

        );
    }

  constructor(props) {
    super(props);

    

    this.state = {
      
      data: [

        {exercise: "Bicep Curls", sets: 4 , reps: 10 , difficulty: "Beginner" },
        {exercise: "Hammer Curls", sets: 4 , reps: 10 , difficulty: "Intermediate"},
        {exercise: "Dumbbell Rows", sets: 4 , reps: 10 , difficulty: "Intermediate"},
        {exercise: "Cable Rows", sets: 4 , reps: 10 , difficulty: "Intermediate"},
        {exercise: "Reverse Curls", sets: 4 , reps: 10 , difficulty: "Advanced"},
        {exercise: "LAT Pulldown", sets: 4 , reps: 10 , difficulty: "Beginner"},
        {exercise: "Seated Curls", sets: 4 , reps: 10 , difficulty: "Intermediate"},
        
      ],
      
      title: "Your Workout Page!",
      
    }


    const workoutExercise = this.state.data.map( exercises => exercises)
      console.log(workoutExercise[0].exercise);
  
  }

 

  



  render() {

  
    return (


      <Container>

        <div className="App">
            <Jumbotron>
              <h1 className="App-title">{this.state.title}</h1>
              
            </Jumbotron>
             
           
            
            <Grid data={this.state.data}>
              <GridColumn field="exercise" className="workoutName" title="Exercise"/>
              <GridColumn field="sets" className="workoutName"/>
              <GridColumn field="reps" className="workoutName"/>
              <GridColumn field="difficulty" className="workoutName"/>
            </Grid>
           

              

            <Container>
             
             
           
              {this.state.data.map(exercise => 
                  <Col size="md-6">
                    <div>
                      <h2>{exercise.exercise}</h2>
                      <SetsForm sets={exercise.sets} />
                    </div>
                  </Col>
              
                )}

            </Container>

        </div>

    </Container>

    );
  }

}


export default Grids;