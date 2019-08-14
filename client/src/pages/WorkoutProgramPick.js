import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
class WorkoutProgramPick extends Component {

    render() {
        return (<>
            <Container fluid={true}>
                <Jumbotron>
                    <h1 class="animated bounce delay-2s"> WORKOUT APP: PROGRAM PICKER</h1>
                </Jumbotron>
               
           </Container>
            <Container>
            <Row >
                <br></br>
                <br></br>
                <br></br>
                <Col size="md-3">
                <h2 class="animated lightSpeedIn"> Program
                <br></br>
                <a className="funky1" href="/calendar">A</a>
                </h2>
                
                <button> <img src="https://fitnessvolt.com/wp-content/uploads/2016/10/Arnold-Schwarzenegger.jpg" alt="img" className="arnold animated bounceInDown delay 2s"></img></button>
                </Col>
                <Col size="md-3">
                <h2 class="animated lightSpeedIn"> Program<div className="funky2">B</div></h2>
                <button> <img src="https://www.evolutionofbodybuilding.net/wp-content/uploads/2013/06/ZaneFrank_1.jpg" alt="img" className="arnold animated bounceInDown delay 2s"></img></button>
                </Col>
                 <Col size="md-3">
                 <h2 class="animated lightSpeedIn"> Program<div className="funky3">C</div></h2>
                 <button> <img src="http://www.rheoblair.com/franco-columbu.jpg" alt="img" className="arnold animated bounceInDown delay 2s"></img></button>
                 </Col>
                 <Col size="md-3">
                 <h2 class="animated lightSpeedIn"> Program<div className="funky4">D</div></h2>
                 <button> <img src="https://vignette.wikia.nocookie.net/hulk/images/6/6e/Lou-ferrigno-training-1-.jpg/revision/latest?cb=20101229061941" alt="img" className="arnold animated bounceInDown delay 2s"></img></button>
                 </Col>
             </Row>
        </Container>
       </>)
   }
                
}
export default WorkoutProgramPick;