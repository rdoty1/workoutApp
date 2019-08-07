import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";


// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid';

class Grids extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {workout: "Legs", length: 45 , difficulty: "Advanced"},
        {workout: "Legs", length: 45 , difficulty: "Advanced"},
        {workout: "Legs", length: 45 , difficulty: "Advanced"},
        {workout: "Legs", length: 45 , difficulty: "Advanced"},
        {workout: "Legs", length: 45 , difficulty: "Advanced"},
        {workout: "Legs", length: 45 , difficulty: "Advanced"},
        {workout: "Legs", length: 45 , difficulty: "Advanced"},
        {workout: "Legs", length: 45 , difficulty: "Advanced"},
        {workout: "Legs", length: 45 , difficulty: "Advanced"}


       
      ],
      title: "Your Workout Page!"
    }
  }
  render() {
    return (
        <div className="App">
            <Jumbotron>
            <h1 className="App-title">{this.state.title}</h1>

            </Jumbotron>
             
          
          
          
          <Grid data={this.state.data}>
            <GridColumn field="workout" title="Workout"/>
            <GridColumn field="length"/>
            <GridColumn field="difficulty"/>
          </Grid>
          
        </div>
    );
  }
}


export default Grids; 