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
                       <h2> row 1</h2>
                       <Col size="md-6">
                       <h2> col 1</h2>
                       </Col>
                       <Col size="md-6">
                       <h2> col 2</h2>
                       </Col>
                   </Row>
               </Container>


               <Container>
                    <h2> row 2</h2>
                    <Row>
                        <Col size="md-6">
                        <h2> col 1</h2>
                        </Col>
                        <Col size="md-6">
                        <h2> col 2</h2>
                        </Col>
                    </Row>
               </Container>
           </Container>
       )
   }

                




}

export default WorkoutProgramPick;


