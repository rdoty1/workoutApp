import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import userService from '../utils/userService'
import { Col, Row, Container } from "../components/Grid";
import SetsForm from "../components/SetsForm"
import * as firebase from "firebase/app"
import "firebase/storage"




// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid';

var firebaseConfig = {
  apiKey: "AIzaSyDPJmbwARVxRJ1jcfnvbJ1cySeFE7lQ7ZQ",
  authDomain: "trainer-audio.firebaseapp.com",
  databaseURL: "https://trainer-audio.firebaseio.com",
  projectId: "trainer-audio",
  storageBucket: "gs://trainer-audio.appspot.com/",
  messagingSenderId: "323872913160",
  appId: "1:323872913160:web:3902ba38a5a18765"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const storageRef = firebase.storage().ref();

// const audioRef = storageRef.child("audio");

// const fileName = `audio_${index}.m4a`;

// const spaceRef = audioRef.child(fileName);

// const path = spaceRef.fullPath;

// const gsReference = firebase.storage().refFromURL("gs://trainer-audio.appspot.com/audio")




class Grids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music:null,
      data: [

        { exercise: "Bicep Curls", sets: 4, reps: 10, difficulty: "Beginner" },
        { exercise: "Hammer Curls", sets: 4, reps: 10, difficulty: "Intermediate" },
        { exercise: "Dumbbell Rows", sets: 4, reps: 10, difficulty: "Intermediate" },
        { exercise: "Cable Rows", sets: 4, reps: 10, difficulty: "Intermediate" },
        { exercise: "Reverse Curls", sets: 4, reps: 10, difficulty: "Advanced" },
        { exercise: "LAT Pulldown", sets: 4, reps: 10, difficulty: "Beginner" },
        { exercise: "Seated Curls", sets: 4, reps: 10, difficulty: "Intermediate" },

      ],

      title: "Your Workout Page!",



    }


  }

  async componentDidMount() {
    try {
      // httpRef
      //   .then((res) => { 
      //     axios.get(`https://cors-anywhere.herokuapp.com/${res}`)
      //     .then((axiosResponse) => { 
      //       this.setState({music: res})
      //     })})
    } catch (err) {
      console.log(err)
    }
  }

  // componentDidMount() { 

  //   const axiosResponse = axios.get(httpRef)
  //       .then(function (response) {
  //         // handle success
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       })
  //       .finally(function () {
  //         // always executed
  //       });

  //   console.log(axiosResponse)

  // }

  SelectAudio=(index) => (event)=>{
    event.preventDefault()
   let myIndex = index+1
const httpRef = storageRef.child(`audio/audio_${myIndex}.m4a`).getDownloadURL().then(function (url) {
  return url;
})
    httpRef
    .then((res) => {
      console.log(res)
      this.setState({music:res})
    })
  }
  AudioPlayer = (props) =>{
    if(!this.state.music) return <></>
    else{
      return <iframe src={this.state.music} allow="autoplay" scrolling="no" frameBorder="0"></iframe>   
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
            <GridColumn field="exercise" className="workoutName" title="Exercise" />
            <GridColumn field="sets" className="workoutName" />
            <GridColumn field="reps" className="workoutName" />
            <GridColumn field="difficulty" className="workoutName" />
          </Grid>

          <this.AudioPlayer />
          <Container>

            {this.state.data.map((exercise,index) =>
              <Col size="md-6" key={index}>
                <div>
                 <h2>{exercise.exercise}</h2>
                  <SetsForm sets={exercise.sets} PlayAudio={this.SelectAudio(index)}/>
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