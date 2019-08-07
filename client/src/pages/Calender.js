import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Calender extends Component {
    render() {
        return (
            <Container fluid>


                <Jumbotron>
                    <h1> WORKOUT APP: YOUR WORKOUT CALENDER!</h1>
                </Jumbotron>


            </Container>
        );
    }
}

export default Calender;