import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer"


class Cal extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>

<Jumbotron>
              <h1>Find Today's Workout</h1>
</Jumbotron>
        

        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />

        <p>*******The day's workout will appear in this space when you click the specific date*******</p>

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