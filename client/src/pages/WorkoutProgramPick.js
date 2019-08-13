import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
class WorkoutProgramPick extends Component {
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1> WORKOUT APP: PROGRAM PICKER!</h1>
                </Jumbotron>
                <Container>
                   <Row>
                       
                       <Col size="md-6" className="one">
                       <h2> Program A</h2>
                       <button> <img src="https://fitnessvolt.com/wp-content/uploads/2016/10/Arnold-Schwarzenegger.jpg" className="arnold"></img></button>
                       </Col>
                       <Col size="md-6" className="one">
                       <h2> Program B</h2>
                       <button> <img src="https://fitnessvolt.com/wp-content/uploads/2016/10/Arnold-Schwarzenegger.jpg" className="arnold"></img></button>
                       </Col>
                 
                        <Col size="md-6" className="one">
                        <h2> Program C</h2>
                        <button> <img src="https://fitnessvolt.com/wp-content/uploads/2016/10/Arnold-Schwarzenegger.jpg" className="arnold"></img></button>
                        </Col>
                        <Col size="md-6" className="one">
                        <h2> Program D</h2>
                        <button> <img src="https://fitnessvolt.com/wp-content/uploads/2016/10/Arnold-Schwarzenegger.jpg" className="arnold"></img></button>
                        </Col>
                    </Row>
               </Container>
           </Container>
       )
   }
                
}
export default WorkoutProgramPick;


