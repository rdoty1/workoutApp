import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";

import { Col, Row, Container } from "../components/Grid";



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
}


export default Grids;