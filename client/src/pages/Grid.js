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

      sets: {
        set1:'',
        set2: '',
        set3: '',
        set4: '',
      },



     


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

   

  
  
  }
  handleChange = event => {

    const {name, value} = event.target;
    this.setState({
      [name]:value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.set1); 
    const sets = {
      set1:this.state.set1,
      set2:this.state.set2,
      set3:this.state.set3,
      set4:this.state.set4
      

    }


    

  }


  render() {
    return (

      <Container>

        <div className="App">
            <Jumbotron>
              <h1 className="App-title">{this.state.title}</h1>
              
            </Jumbotron>
             
            <Grid data={this.state.data}>
              <GridColumn field="exercise" className="workoutName" title="Exercise" name="exercise"/>
              <GridColumn field="sets" className="workoutName" name="sets"/>
              <GridColumn field="reps" className="workoutName" name="reps"/>
              <GridColumn field="difficulty" className="workoutName" name="difficulty"/>
            </Grid>
        
            <Container>
    
              {this.state.data.map(exercise => 
                  <Col size="md-6">
                    <div>
                      <h2>{exercise.exercise}</h2>
                      <form>
                        <label>
                          Set 1:
                          <input type="text" name="Set1" value={this.state.sets.set1} onChange={this.handleChange}/>
                        </label>
                        <br></br>
                        <label>
                          Set 2:
                          <input type="text" name="Set2" value={this.state.sets.set2} onChange={this.handleChange}/>
                        </label>
                        <br></br>
                        <label>
                          Set 3:
                          <input type="text" name="Set3" value={this.state.sets.set3} onChange={this.handleChange}/>
                        </label>
                        <br></br>
                        <label>
                          Set 4:
                          <input type="text" name="Set4" value={this.state.sets.set4} onChange={this.handleChange} />
                        </label>
                        <br></br>
                        <br></br>
                        <input type="submit" value="Submit"  />
                      </form>
                      
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