import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
class Cal extends Component {
  state = {
    date: new Date(),
    
  }
 
  handleChange = date => this.setState({ date })
  
 
  render() {
    return (
      <div>
​
        <Jumbotron>
            <h1>Find Today's Workout</h1>
        </Jumbotron>
​
       
        
​
        <Calendar
          handleChange={this.handleChange}
          value={this.state.date}
         
        />
​
          <button>
            <a className="workoutButton" href="/grid">See Today's Workout</a>
          </button>
​
​
​
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