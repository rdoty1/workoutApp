import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import userService from '../utils/userService'
import { Col, Row, Container } from "../components/Grid";
import SetsForm from "../components/SetsForm"
import * as firebase from "firebase/app"
import "firebase/storage"





// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid';

require('dotenv').config({ path: '../.env' });

var firebaseConfig = {
  apiKey: process.env.Key,
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


      sets: {
        set1:'',
        set2: '',
        set3: '',
        set4: '',
      },



    
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
      return <iframe src={this.state.music}  style={{display:'none'}} allow="autoplay" scrolling="no" frameBorder="0"></iframe>   
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

      

        <div className="App">
            <Jumbotron>
              <h1 className="App-title">{this.state.title}</h1>
              
            </Jumbotron>
            <Container>
              <Row>
            <Grid data={this.state.data}>
              <GridColumn field="exercise" className="workoutName" title="Exercise" name="exercise"/>
              <GridColumn field="sets" className="workoutName" name="sets"/>
              <GridColumn field="reps" className="workoutName" name="reps"/>
              <GridColumn field="difficulty" className="workoutName" name="difficulty"/>
            </Grid>
            </Row>
           
          <this.AudioPlayer />
              <div className='mt-3'>
    <Row >
              {this.state.data.map((exercise,index) => 
                  <Col size="md-4" key={index}>
                    <div className="my-5">
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
                        <input type="submit" value="Submit" onClick={this.SelectAudio(index)}/>
                      </form>
                      
                    </div>
                  </Col>
           
              )}
   </Row>
   </div>


      </Container>

      </div>
    );
  }

}


export default Grids;