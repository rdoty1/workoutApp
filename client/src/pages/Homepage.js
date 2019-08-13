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
            <a className="loginStyle" href="/Login">Login</a>
            </Jumbotron>



            <Row>
              <Col size="md-6">

            <Container className="bodyOne">
              <div className="stepOne">
              <h1 className="stepOneTitle">STEP ONE: FILL OUT INFORMATION</h1>
                 <br></br>
                  <Row>
                    <Col size="md-6">
                      <label>
                        First Name:
                      </label>
                    </Col>

                    <Col size="md-6">
                      <input className="boxes" type="text" name="firstName"  value={this.state.firstName} onChange={this.handleChange} />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col size="md-6">
                      <label>
                        Last Name:
                      </label>
                    </Col>
                    <Col size="md-6">
                      <input className="" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col size="md-6">
                    <label>
                    Email:
                    </label>
                    </Col>
                    <Col size="md-6">
                    <input className="" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col size="md-6">
                    <label>
                    Password:
                    </label>
                    </Col>
                    <Col size="md-6">
                    <input className="" type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col size="md-6">
                    <label>
                    Your Age:
                    </label>
                    </Col>
                    <Col size="md-6">
                    <input className="" type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col size="md-6">
                    <label>
                    Your Weight (lbs):
                    </label>
                    </Col>
                    <Col size="md-6">
                    <input className='' type="text" name="weight" value={this.state.weight} onChange={this.handleChange}  />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col size="md-6">
                    <label>
                    Time Frame (weeks):
                    </label>
                    </Col>
                    <Col size="md-6">
                    <input className="" type="text" name="timeFrame" value={this.state.timeFrame} onChange={this.handleChange} />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col size="md-6">
                    <label>
                    Days Per Week (1-7):
                    </label>
                    </Col>
                    <Col size="md-6">
                    <input className="" type="text" name="daysPerWeek" value={this.state.daysPerWeek}  onChange={this.handleChange} />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col size="md-6">
                    <label>
                    Workout Length (minutes):
                    </label>
                    </Col>
                    <Col size="md-6">
                    <input className="" type="text" name="workoutLength"  value={this.state.workoutLength} onChange={this.handleChange} />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col size="md-6">
                    <label>
                    Experience Level:
                    </label>
                    </Col>
                    <Col size="md-6">
                    <input className="" type="text" name="experienceLevel" value={this.state.experienceLevel} onChange={this.handleChange} />
                    </Col>
                  </Row>
                 
                 
               
                
               
                         
                
              </div>
            
            </Container>
            </Col>
            

      

      
      

          <Col size="md-6">
          <Container className="steps">
            <Container className="bodyThree">
              
              <div className="stepThree">
    
                <h1 className="stepOneTitle">
                STEP TWO: VERIFY YOUR INFORMATION
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
                  <Row>
                  <Col size="md-12">
                  <input className="submit" type="submit" value="Submit" onClick={this.handleFormSubmit} />
                </Col>
                </Row>
                
                
                

              </div>
      
      
            </Container>
            </Container>
            </Col>
            </Row>
      
        
      
            <Footer className="footer">
              THIS IS OUR PROJECT
            </Footer>
      
          </Container>



        )

    }






}

export default HomePage