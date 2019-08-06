import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import { Col, Row, Container } from "./components/Grid";
import Footer from "./components/Footer"
import { Input, TextArea, FormBtn } from "./components/Form";
import {Form} from "./components/Form"




function App() {
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
            <Form>

            </Form>
        
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
  
  );
}

export default App;
