import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
import styled from 'styled-components'

class Cal extends Component {
  state = {
    date: new Date(),
    
  }
 
  handleChange = date => this.setState({ date })
  
 
  render() {
    return (
      <div>

        <Jumbotron>
            <h1>Find Today's Workout</h1>
        </Jumbotron>

       
        

        <Calendar
          handleChange={this.handleChange}
          value={this.state.date}
         
        />
          <BtnWrap>
            <a className="workoutButton" href="/grid">See Today's Workout</a>
          </BtnWrap>


        <Footer>
          <div className="foot">
            THIS IS OUR PROJECT
          </div>
        </Footer>
      </div>
    );
  };
};


const BtnWrap = styled.div`
text-align:center;
font-size:40px;
margin-top:50px;
color:black;
font-weight:bold;



`

export default Cal;