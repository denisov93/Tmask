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
  // eslint-disable-next-line
  CardHeader,
  // eslint-disable-next-line
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
import CustomStyles from 'assets/css/custom-styles.css';

const maskIndex = [
  "",
  "",
  "",
]

const accordionStyle = {
  maxHeight: '400px',
  overflowY:'scroll',
}

const btnStyle = {
  borderRadius: '16px',
  backgroundPosition: 'left top',
  backgroundRepeat: 'repeat',
  paddingLeft: '1px',
  margin:'2px',
  width: '90px',
  height: '90px',
};

const RAM = {
    display: 'grid',
    gridGap:'1rem',
    gridTemplateColumns: 'repeat(auto-fit,minmax(80px,1fr))'
}

class Builder extends React.Component {
  state = { 
    expanded:'',
    hearts:[]
   };

  heartAdd = () =>{
    this.refs.editor.handleAddHeart();
    console.log(this.refs.editor.state)
  }

  handleAddHeart = () => {
    this.setState({
      hearts: [...this.state.hearts, "<3"]
    })
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

              <Col >
                
              <Card className="card shadow" style={{height:"800px"}}>

              
              <Accordion defaultActiveKey="0">
              
              <Accordion.Toggle as={CardHeader} eventKey="0" >
                  Masks
              </Accordion.Toggle>
              <Accordion.Collapse style={accordionStyle} eventKey="0">
                <div style={RAM}>
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.handleAddHeart()}}
                    >
                      Add Heart
                    </Button>
                    
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>


                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>

                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>

                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>

                </div>
              </Accordion.Collapse>
              
              <Card>
              <Accordion.Toggle as={CardHeader} eventKey="1">
                  Materials
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card>
                <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>

                </Card>
              </Accordion.Collapse>
              </Card>
              <Card>
              <Accordion.Toggle as={CardHeader} eventKey="2">
                  Images
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card>
                <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>

                </Card>
              </Accordion.Collapse>
              </Card>
              <Card>
              <Accordion.Toggle as={CardHeader} eventKey="3">
                  Colors
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card>
                
                <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                
                </Card>
              </Accordion.Collapse>
              </Card>
              <Card>
              <Accordion.Toggle as={CardHeader} eventKey="4">
                  Decorations
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card>
                
                <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                    
                    <Button
                      color="primary"
                      style={btnStyle}
                      onClick={()=>{this.heartAdd()}}
                    >
                      Add Heart
                    </Button>
                
                </Card>
              </Accordion.Collapse>
              </Card>

              </Accordion> 
          </Card>
        </Col>

      </Col>
          
          <Col id="middleComponent" className="col-6" >
          <Card id="editor" className="card shadow" style={{height:"800px"}}>
          
          <MaskEditor hearts={this.state.hearts} ref="editor"/>
          
          </Card>
          </Col>

          
          <Col id="rightComponent"  className="col-3">
            <Col >
              <Card className="card shadow" style={{height:"800px"}}>
              wqedqwd
              </Card>
            </Col>  
          
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

