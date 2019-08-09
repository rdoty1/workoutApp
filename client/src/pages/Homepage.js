import React, {Component} from 'react';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer"
import { Input, TextArea, FormBtn } from "../components/Form";
import {Form} from "../components/Form";
import userService from "../utils/userService";
import { runInThisContext } from 'vm';



class HomePage extends Component {
    state = {
      firstName:'',
      lastName: '',
      email: '',
      password:'',
      age: '',
      weight: '',
      timeFrame: '',
      daysPerWeek:'',
      experienceLevel:'',
      createdAt: '',
      updatedAt: ''
    }

    componentDidMount()  {
        this.loadUsers();
    }


    loadUsers = (user) => {
      userService.findUser(user)
      console.log(user)

        
    }

      handleChange = event => {
        //looking for the change of input values on form 
        //check the values in that event 
      
        const {name, value} = event.target;
        this.setState({
            [name]: value       
        })
        
      }

      handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.firstName);
         const user = {
          firstName:this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password:this.state.password,
          age: this.state.age,
          weight: this.state.weight,
          timeFrame: this.state.timeFrame,
          daysPerWeek:this.state.daysPerWeek,
          experienceLevel:this.state.experienceLevel

         }
         console.log(user);
          userService.createUser(user)
            .then(res => this.loadUsers(user))
            .catch(err => console.log(err));
        
      };



    render() {
        return (
            <Container fluid>
      
            <Jumbotron>
              <h1> WORKOUT APP</h1>
            </Jumbotron>
            
            <Container className="bodyOne">
              <div className="stepOne">
                
                <h1 className="stepOneTitle">
                STEP ONE: FILL OUT INFORMATION
                </h1>
          
                <Container>
                  <div className="userInfo">
                <form>
                <div class="container">
                <br></br>
                <div class="row">
                <div class="col-lg-6">
                  <label>
                    First Name:
                  </label>
                  </div>
                  <div class="col-lg-6">
                  <input className="boxes" type="text" name="firstName"  value={this.state.firstName} onChange={this.handleChange} />
                  </div>
                  <br></br>
                  </div>

                <div class="row">
                <div class="col-lg-6">
                  <label>
                    Last Name:
                  </label>
                  </div>
                  <div class="col-lg-6">
                  <input className="" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                  </div>
                  <br></br>
                  </div>

                <div class="row">
                <div class="col-lg-6">
                  <label>
                  Email:
                  </label>
                  </div>
                  <div class="col-lg-6">
                  <input className="" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                  <br></br>
                  </div>

                  <div class="row">
                <div class="col-lg-6">
                  <label>
                  Password:
                  </label>
                  </div>
                  <div class="col-lg-6">
                  <input className="" type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                  </div>
                  <br></br>
                  </div>

                  <div class="row">
                <div class="col-lg-6">
                  <label>
                  Your Age:
                  </label>
                  </div>
                  <div class="col-lg-6">
                  <input className="" type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                  </div>
                  <br></br>
                  </div>

                  <div class="row">
                <div class="col-lg-6">
                  <label>
                  Your Weight (lbs):
                  </label>
                  </div>
                  <div class="col-lg-6">
                  <input className='' type="text" name="weight" value={this.state.weight} onChange={this.handleChange}  />
                  </div>
                  <br></br>
                  </div>

                  <div class="row">
                <div class="col-lg-6">
                  <label>
                  Time Frame (weeks):
                  </label>
                  </div>
                  <div class="col-lg-6">
                  <input className="" type="text" name="timeFrame" value={this.state.timeFrame} onChange={this.handleChange} />
                  </div>
                  <br></br>
                  </div>

                  <div class="row">
                <div class="col-lg-6">
                  <label>
                  Days Per Week (1-7):
                  </label>
                  </div>
                  <div class="col-lg-6">
                  <input className="" type="text" name="daysPerWeek" value={this.state.daysPerWeek}  onChange={this.handleChange} />
                  </div>
                  <br></br>
                  </div>

                  <div class="row">
                <div class="col-lg-6">
                  <label>
                  Workout Length (minutes):
                  </label>
                  </div>
                  <div class="col-lg-6">
                  <input className="" type="text" name="workoutLength"  value={this.state.workoutLength} onChange={this.handleChange} />
                  </div>
                  <br></br>
                  </div>

                  <div class="row">
                <div class="col-lg-6">
                  <label>
                  Experience Level:
                  </label>
                  </div>
                  <div class="col-lg-6">
                  <input className="" type="text" name="experienceLevel" value={this.state.experienceLevel} onChange={this.handleChange} />
                  </div>
                  <br></br>
                  </div>
                  </div>

                </form>
                </div>
                                
                </Container>
                
              </div>
            </Container>
      
            <Container className="bodyTwo">
      
              <div className="stepTwo">
                
                
                <h1 className="stepOneTitle">
                STEP TWO: EXPERIENCE LEVEL
                </h1>
      
                <Container>
                <div className="container">
                <div className="row">
                <div className="col-lg-6">      
                <img className="image1" src="https://media3.mensxp.com/media/content/2016/Oct/beginner-rsquo-s-training-guide-in-the-gym980-1476963053_1100x513.jpg" alt="beginner" ></img>
                </div>
                <div className="col-lg-6">   
                <h3>BEGINNER</h3>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-6">
                <h3>INTERMEDIATE</h3>
                </div>
                <div className="col-lg-6">
                <img className="image2" src="https://media1.popsugar-assets.com/files/thumbor/jHfmIJteIm11bxFRxZLoXBFy3m4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/12/28/846/n/1922729/02f8b6105c26771fc830f0.52460620_/i/Workout-Plan-Women.jpg" alt="intermediate"></img>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-6">
                <img className="image3" src="https://qph.fs.quoracdn.net/main-qimg-6f245bf4b6ac8c9069ac460183934ca8" alt="advanced"></img>
                </div>
                <div className="col-lg-6">
                <h3>ADVANCED</h3>
                </div>
                </div>
                </div>
      
                </Container>
      
              </div>
      
      
            </Container>
      
            <Container className="bodyThree">
              
              <div className="stepThree">
    
                <h1 className="stepOneTitle">
                STEP THREE: VERIFY YOUR INFORMATION
                </h1>
                <br></br>
                  <div className="verify">
                    <h4>First Name: {this.state.firstName} </h4> 
                    <h4>Last Name: {this.state.lastName} </h4> 
                    <h4>Email: {this.state.email} </h4> 
                    <h4>Password: {this.state.password} </h4> 
                    <h4>Your Weight: {this.state.weight} </h4> 
                    <h4>Time Frame: {this.state.timeFrame} </h4> 
                    <h4>Days Per Week: {this.state.daysPerWeek} </h4> 
                    <h4>Workout Length : {this.state.workoutLength} </h4> 
                    <h4>Experience Level: {this.state.experienceLevel} </h4> 
                  </div>
                  <div class="row">
                <div class="col-lg-12">
                  <input className="submit" type="submit" value="Submit" onClick={this.handleFormSubmit} />
                </div>
                </div>
                

              </div>
      
      
            </Container>
      
        
      
            <Footer>
      
              <div className="foot">
              THIS IS OUR PROJECT
              </div>
      
        
            </Footer>
      
          </Container>



        )

    }






}

export default HomePage