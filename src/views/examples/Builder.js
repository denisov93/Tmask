/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim
* Modified by Tactical Design

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import MaskEditor from "components/MaskEditor.js"

// reactstrap components
import {
  // eslint-disable-next-line
  Badge,
  // eslint-disable-next-line
  Button,
  // eslint-disable-next-line
  Card,
  CardHeader,
  CardTitle,
  // eslint-disable-next-line
  CardBody,
  // eslint-disable-next-line
  CardImg,
  // eslint-disable-next-line
  FormGroup,
  // eslint-disable-next-line
  Input,
  // eslint-disable-next-line
  InputGroupAddon,
  // eslint-disable-next-line
  InputGroupText,
  // eslint-disable-next-line
  InputGroup,
  // eslint-disable-next-line
  Container,
  // eslint-disable-next-line
  Row,
  // eslint-disable-next-line
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

import Accordion from 'react-bootstrap/Accordion';
import ram from'assets/css/ram.css';


class Builder extends React.Component {
  state = { 
    expanded:''
   };

  heartAdd = () =>{
    this.refs.editor.handleAddHeart()
  }

  download = () =>{
    this.refs.editor.handleExportClick()
  }

  setExpanded(panel){
    this.setState({ expanded: panel });
  }

  handleChange = (panel) => (event, newExpanded) => {
    this.setExpanded(newExpanded ? panel : false);
  };
  
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <br></br>
              
              <Row>   
              
          <Col id="leftComponent" className="col-3">
          <Card className="card-profile shadow" style={{height:"800px"}}>

          
          <Accordion defaultActiveKey="0">
          <Card>
          <Accordion.Toggle as={CardHeader} eventKey="0">
              
              <h5> Click Me! </h5>

          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card>
                <Button
                  className="mt-4"
                  color="primary"
                  onClick={()=>{this.heartAdd()}}
                >
                  Add Heart
                </Button>
                
                <Button
                  className="mt-4"
                  color="primary"
                  onClick={()=>{this.download()}}
                >
                  Add Heart
                </Button>

            </Card>
          </Accordion.Collapse>
          </Card>
          <Card>
          <Accordion.Toggle as={CardHeader} eventKey="1">
              Click Me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card>
                <Button
                  className="mt-4"
                  color="primary"
                  onClick={()=>{this.heartAdd()}}
                >
                  Add Heart
                </Button>
                
                <Button
                  className="mt-4"
                  color="primary"
                  onClick={()=>{this.download()}}
                >
                  Add Heart
                </Button>

            </Card>
          </Accordion.Collapse>
          </Card>
          <Card>
          <Accordion.Toggle as={CardHeader} eventKey="2">
              Click Me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card>
                <Button
                  className="mt-4"
                  color="primary"
                  onClick={()=>{this.heartAdd()}}
                >
                  Add Heart
                </Button>
                
                <Button
                  className="mt-4"
                  color="primary"
                  onClick={()=>{this.download()}}
                >
                  Add Heart
                </Button>

            </Card>
          </Accordion.Collapse>
          </Card>
          <Card>
          <Accordion.Toggle as={CardHeader} eventKey="3">
              Click Me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card>
            
                <Button
                  className="mt-4"
                  color="primary"
                  onClick={()=>{this.heartAdd()}}
                >
                  Add Heart
                </Button>
                
                <Button
                  className="mt-4"
                  color="primary"
                  onClick={()=>{this.download()}}
                >
                  Add Heart
                </Button>
            
            </Card>
          </Accordion.Collapse>
          </Card>
          </Accordion>

              
              
          </Card>
          </Col>
          
          <Col id="middleComponent" className="col-6">
          <Card id="editor" className="card-profile shadow" style={{height:"800px"}}>
          
          <MaskEditor ref="editor"/>
          
          </Card>
          </Col>

          <Col id="rightComponent" className="col-3">
          <Card className="card shadow" style={{height:"800px"}}>
          
          </Card>
          </Col>

        </Row>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        </main>
        
        <CardsFooter />
      </>
    );
  }
}

export default Builder;

