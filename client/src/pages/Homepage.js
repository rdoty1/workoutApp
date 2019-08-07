import React, {Component} from 'react';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer"
import { Input, TextArea, FormBtn } from "../components/Form";
import {Form} from "../components/Form"
// import API from "./../utils/API/workout-user-api-routes"






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



    // componentDidMount()  {
    //     this.loadUsers();
    // }


    // loadUsers = () => {
    //     API.
    // }

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
          // API.saveBook({
          //     firstName:this.State.firstName,
          //     lastName: '',
          //     email: '',
          //     password:'',
          //     age: '',
          //     weight: '',
          //     timeFrame: '',
          //     daysPerWeek:'',
          //     experienceLevel:'',
          //     createdAt: '',
          //     updatedAt: ''
          // })
          //   .then(res => this.loadBooks())
          //   .catch(err => console.log(err));
        
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
                <form>

                  <label>
                    First Name:
                  </label>
                  <input className="boxes" type="text" name="firstName"  value={this.state.firstName} onChange={this.handleChange} />

                  
                  <br></br>
                  
                  <label>
                    Last Name:
                  </label>
                  <input className="boxes" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                  <br></br>

                  <label>
                  Email:
                  </label>
                  <input className="boxes" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                  <br></br>

                  <label>
                  Password:
                  </label>
                  <input className="boxes" type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                  <br></br>

                  <label>
                  Your Age:
                  </label>
                  <input className="boxes" type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                  <br></br>

                  <label>
                  Your Weight:
                  </label>
                  <input className="boxes" type="text" name="weight" value={this.state.weight} onChange={this.handleChange}  />
                  <br></br>

                  <label>
                  Your Goals:
                  </label>
                  <input className="boxes" type="text" name="goals" value={this.state.goals} onChange={this.handleChange} />
                  <br></br>

                  <label>
                  Time Frame:
                  </label>
                  <input className="boxes" type="text" name="timeFrame" value={this.state.timeFrame} onChange={this.handleChange} />
                  <br></br>

                  <label>
                  Days Per Week:
                  </label>
                  <input className="boxes" type="text" name="daysPerWeek" value={this.state.daysPerWeek}  onChange={this.handleChange} />
                  <br></br>

                  <label>
                  Workout Length:
                  </label>
                  <input className="boxes" type="text" name="workoutLength"  value={this.state.workoutLength} onChange={this.handleChange} />
                  <br></br>

                  <label>
                  Experience Level:
                  </label>
                  <input className="boxes" type="text" name="experienceLevel" value={this.state.experienceLevel} onChange={this.handleChange} />
                  <br></br>

                  <input className="submit" type="submit" value="Submit" />

                </form>
                                
                </Container>
                
              </div>
            </Container>
      
            <Container className="bodyTwo">
      
              <div className="stepTwo">
                
                
                <h1 className="stepOneTitle">
                STEP TWO: EXPERIENCE LEVEL
                </h1>
      
                <Container>
      
                <img className="image" src="https://media3.mensxp.com/media/content/2016/Oct/beginner-rsquo-s-training-guide-in-the-gym980-1476963053_1100x513.jpg" alt="beginner"></img>
                <img className="image" src="https://media1.popsugar-assets.com/files/thumbor/jHfmIJteIm11bxFRxZLoXBFy3m4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/12/28/846/n/1922729/02f8b6105c26771fc830f0.52460620_/i/Workout-Plan-Women.jpg" alt="intermediate"></img>
                <img className="image" src="https://qph.fs.quoracdn.net/main-qimg-6f245bf4b6ac8c9069ac460183934ca8" alt="advanced"></img>
      
                </Container>
      
              </div>
      
      
            </Container>
      
            <Container className="bodyThree">
              
              <div className="stepThree">
      
      
                <h1 className="stepOneTitle">
                STEP THREE: VERIFY YOUR INFORMATION
                </h1>
                <br></br>
                <input className="submit" type="submit" value="Submit" />
      
      
      
      
      
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