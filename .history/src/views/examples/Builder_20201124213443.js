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
import mask from 'assets/img/masks/white.png';
import mask1 from 'assets/img/editorResources/editor_mask_cloth.png';
import mask2 from 'assets/img/editorResources/editor_mask_cirurgical.png';
import mask3 from 'assets/img/editorResources/editor_mask_N95_type2.png';
import mask4 from 'assets/img/editorResources/editor_mask_N95.png';
//ovelays
import mOverlay1 from 'assets/img/editorResources/editor_mask_cloth_overlay.png';
import mOverlay2 from 'assets/img/editorResources/editor_mask_cirurgical_overlay.png';
import mOverlay3 from 'assets/img/editorResources/editor_mask_N95_type2_overlay.png';
import mOverlay4 from 'assets/img/editorResources/editor_mask_N95_overlay.png';
//images
import image1 from "assets/img/editorResources/editor_image_1.png"
import image2 from "assets/img/editorResources/editor_image_2.png" 
import image3 from "assets/img/editorResources/editor_image_3.png" 
import image4 from "assets/img/editorResources/editor_image_4.jpg" 
import image5 from "assets/img/editorResources/editor_image_5.jpg" 
import image6 from "assets/img/editorResources/editor_image_6.png" 
import image7 from "assets/img/editorResources/editor_image_7.png" 

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
import { ReactComponent as TrashCan } from 'assets/svg/trash.svg';
import Accordion from 'react-bootstrap/Accordion';

const btnImageStyle = {
  paddingLeft: '1px',
  width: '83px',
  height: '82px',
  borderRadius: '14px',
}

const accordionStyle = {
  maxHeight: '500px',
  overflowY: 'scroll',
  overflowX: 'hidden',
}

const emptyness={
  display: 'none'
}

const btnOptionStyle = {
  background: "#525F7F",
  border: '0px',
  borderRadius: '16px',
  paddingLeft: '17px',
  margin: '1px',
  width: '90px',
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const btnCloudStyle = {
  background: "#525F7F",
  border: '0px',
  borderRadius: '16px',
  paddingLeft: '19px',
  margin: '1px',
  width: '90px',
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const btnStyle = {
  background: "#A0B0C0",
  border: '0px',
  borderRadius: '16px',
  paddingLeft: '19px',
  margin: '1px',
  width: '90px',
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const RAM = {
  display: 'grid',
  gridGap: '0rem',
  gridTemplateColumns: 'repeat(auto-fit,minmax(90px,1fr))',
  maxWidth: '375px',
}

const simpleLayer = {
  height: "4em",
  background: "#f4f4f4",
  padding: "10px",
  borderBottom: "1px #ccc dotted",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const btnDeleteStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

const trashStyle = {
  border: "none",
  padding: "5px 9px",
  cursor: "pointer",
  float: "right",
};

class Builder extends React.Component {
  state = {
    expanded: '',
    selectedLayer:-1,
    decorations: [],
    maskType: mask,
    maskBB:[],
    preExport : false,
    maskOverlay: mOverlay1,
    viewMode: false, // >>> if maskOverlay is visible in canvas
  };

  handleClearDrawing(){
    console.log("Clear Drawing")
    
    
  }

  handleChangeImageSrc = src =>{
    this.setState({
      maskType: src
    })
  }
  handleChangeImageOverlay = over =>{
    this.setState({
      maskOverlay: over
    })
  }

  handleAddImageLayer(name,lr){
    this.setState({
      decorations: [...this.state.decorations, (name,lr)]
    })
  }

  nameParser(string){
    return (string.split('/').splice(-1)+'').split('.').splice(0,1)
  }

  handleAddShape(element){
    this.setState({
      decorations: [...this.state.decorations, element]
    })
  }

  toggleViewMode(){
    this.setState({
      viewMode: !this.state.viewMode
    })
  }

  handleViewMode(){
    if(this.state.viewMode){
        return(
          <div style={{display: 'flex', maxHeight:'30px', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <div></div>
              <div>How it looks?</div><div style={{paddingTop: '5px'}}><h3><i class="fa fa-eye" style={{color:'#006600'}}></i></h3></div>
              <div></div>
          </div>
        )
    }else{
        return(
          <div style={{display: 'flex', maxHeight:'30px', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <div></div>
              <div>How it looks?</div><div style={{paddingTop: '5px'}}><h3><i class="fa fa-eye-slash" style={{color:'#990000'}}></i></h3></div>
              <div></div>
          </div>
        )
    }
  }

  handleUndoDecoration = item =>{
    var state = this.state.decorations.filter( (el,index)=>{
      return index !== item
    },{})
    this.setState({
      decorations: state
    })
  }

  download = () => {
    this.setState({
      preExport : !this.state.preExport
    })
    //this.refs.editor.handleExportClick()
  }

  setExpanded(panel) {
    this.setState({ expanded: panel });
  }

  handleChange = (panel) => (event, newExpanded) => {
    this.setExpanded(newExpanded ? panel : false);
  };

  handleImageBB = img =>{
    this.setState({
      maskBB : [...this.state.maskBB, img]
    })
  }

  handleAddNewImageUser = () =>{  
    var fileInput = document.getElementById('file-input');
    var img = new Image();
    var reader = new FileReader();
    fileInput.click();

    fileInput.onchange = function(e){
        const file = fileInput.files[0];

        
        reader.onload = function(e) {    
            img.src = reader.result;     
        }
        reader.readAsDataURL(file);
        
        
    };  

    reader.onloadend = ( ) => this.handleImageBB(img);
    
  }

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


                <Col id="leftComponent" className="col-3" style={{zIndex: 0}}>

                  <Col style={{userSelect: 'none'}}>

                    <Card className="card shadow" style={{ height: "800px" }}>

                      <Accordion defaultActiveKey="0">

                        <Accordion.Toggle as={CardHeader} eventKey="0">
                        {" "}<i class="fa fa-head-side-mask"></i>{" "}<i className="fa fa-shield"></i> Masks
                          </Accordion.Toggle>
                        <Accordion.Collapse style={accordionStyle} eventKey="0">
                          <div style={RAM}>
                          <Button
                              color="primary"
                              style={btnStyle}
                              onClick={() => { /* change background image of mask */ }}>
                          <img src={require("assets/img/editorResources/editor_mask_cloth.png").default} style={btnImageStyle} alt="Triangle" 
                          onClick={ (e)=>{
                            e.preventDefault()
                            this.handleChangeImageSrc(mask1)
                            this.handleChangeImageOverlay(mOverlay1)
                          }} />
                          </Button>

                          <Button
                              color="primary"
                              style={btnStyle}
                              onClick={() => { /* change background image of mask */ }}>
                          <img src={require("assets/img/editorResources/editor_mask_cirurgical.png").default} style={btnImageStyle} alt="Triangle" 
                            onClick={ (e)=>{
                            e.preventDefault()
                            this.handleChangeImageSrc(mask2)
                            this.handleChangeImageOverlay(mOverlay2)
                          }} /> </Button>

                          <Button
                              color="primary"
                              style={btnStyle}
                              onClick={() => { /* change background image of mask */ }}>
                          <img src={require("assets/img/editorResources/editor_mask_N95_type2.png").default} style={btnImageStyle} alt="Triangle" 
                            onClick={ (e)=>{
                              e.preventDefault()
                              this.handleChangeImageSrc(mask3)
                              this.handleChangeImageOverlay(mOverlay3)
                            }} />                          
                          </Button>

                          <Button
                              color="primary"
                              style={btnStyle}
                              onClick={() => { /* change background image of mask */ }}>
                          <img src={require("assets/img/editorResources/editor_mask_N95.png").default} style={btnImageStyle} alt="Triangle" 
                          onClick={ (e)=>{
                            e.preventDefault()
                            this.handleChangeImageSrc(mask4)
                            this.handleChangeImageOverlay(mOverlay4)
                          }} />
                          </Button>

                          </div>
                        </Accordion.Collapse>

                        <Card>
                          <Accordion.Toggle as={CardHeader} eventKey="1">
                            <i className="fa fa-cubes"></i> Materials
                            </Accordion.Toggle>
                          <Accordion.Collapse style={accordionStyle} eventKey="1">
                            <div style={RAM}>
                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { }}
                              >
                                Cloth
                                </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => {  }}
                              >
                                Plastic
                                </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { }}
                              >
                                100% Cotton
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { }}
                              >
                                Poly-propylene
                              </Button>

                            </div>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={CardHeader} eventKey="2">
                            <div style={{
                              flex: 1,
                              flexDirection: 'row',
                              justifyContent: 'right',
                            }}>
                            <i className="fa fa-image"></i> Images
                            </div>
                            </Accordion.Toggle>
                          <Accordion.Collapse style={accordionStyle} eventKey="2">
                            <div style={RAM}>
                            <input id="file-input" type="file" name="name" style={emptyness} />
                            <Button
                            color="primary"
                            style={btnCloudStyle}
                            onClick={ (e)=>{
                              e.preventDefault() 
                              this.handleAddNewImageUser() }}>
                            <div>
                              <h3 style={{paddingLeft:'4px'}}><font color='EEEEEE'><i class="fa fa-cloud-upload"></i></font></h3>
                              <font color='FFFFFF'>Upload</font>
                            </div>
                            </Button>
                              {this.state.maskBB.map((el,index)=>
                                (<div key={index}>
                                  <Button
                                    color="primary"
                                    style={btnStyle}
                                    onClick={() => { }}>
                                    <img src={el.src} style={btnImageStyle} alt="Not Bob Ross" 
                                      onClick={(e)=>{
                                      e.preventDefault()
                                      this.handleAddImageLayer("editor_image_1", el.src)
                                    }}/>
                                 </Button>
                                </div>)
                              )}

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { }}>
                              <img src={require("assets/img/editorResources/editor_image_1.png").default} style={btnImageStyle} alt="Bob Ross" 
                                onClick={(e)=>{
                                e.preventDefault()
                                
                                this.handleAddImageLayer("editor_image_1", image1)
                                }}/>
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => {  }}>
                              <img src={require("assets/img/editorResources/editor_image_2.png").default} style={btnImageStyle} alt="Triangle" 
                                onClick={(e)=>{
                                e.preventDefault()
                                
                                this.handleAddImageLayer("editor_image_2", image2)
                                }}/>
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { }}>
                              <img src={require("assets/img/editorResources/editor_image_3.png").default} style={btnImageStyle} alt="Triangle" 
                                onClick={(e)=>{
                                e.preventDefault()
                                
                                this.handleAddImageLayer("editor_image_3", image3)
                                }}/>
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { }}>
                              <img src={require("assets/img/editorResources/editor_image_4.jpg").default} style={btnImageStyle} alt="Triangle" 
                                onClick={(e)=>{
                                e.preventDefault()
                                
                                this.handleAddImageLayer("editor_image_4", image4)
                                }}/>
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { }}>
                              <img src={require("assets/img/editorResources/editor_image_5.jpg").default} style={btnImageStyle} alt="Triangle" 
                                onClick={(e)=>{
                                e.preventDefault()
                                
                                this.handleAddImageLayer("editor_image_5", image5)
                                }}/>
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { }}>
                              <img src={require("assets/img/editorResources/editor_image_6.png").default} style={btnImageStyle} alt="Triangle" 
                                onClick={(e)=>{
                                e.preventDefault()
                                
                                this.handleAddImageLayer("editor_image_6", image6)
                                }}/>
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { }}>
                              <img src={require("assets/img/editorResources/editor_image_7.png").default} style={btnImageStyle} alt="Triangle" 
                                onClick={(e)=>{
                                e.preventDefault()
                                
                                this.handleAddImageLayer("editor_image_7", image7)
                                }}/>
                              </Button>

                            </div>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={CardHeader} eventKey="3">
                            <i className="fa fa-paint-brush"></i> Painting
                            </Accordion.Toggle>
                          <Accordion.Collapse style={accordionStyle} eventKey="3">
                            <div style={RAM}>
                              <Button
                                color="primary"
                                style={btnOptionStyle}
                                onClick={() => {  }}>
                              <img src={require("assets/img/editorResources/editor_colorwheel.png").default} style={btnImageStyle} alt="Triangle" onClick={this.myfunction} />
                              </Button>

                              <Button
                                color="primary"
                                style={btnOptionStyle}
                                onClick={() => {  }}>
                                  Toggle Pen on/off
                              </Button>

                              <Button
                                color="primary"
                                style={btnOptionStyle}
                                onClick={() => { this.handleClearDrawing() }}>
                                  Clear Drawing
                              </Button>

                            </div>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={CardHeader} eventKey="4">
                            <i className="fa fa-star"></i> Decorations
                            </Accordion.Toggle>
                          <Accordion.Collapse style={accordionStyle} eventKey="4">
                            <div style={RAM}>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.handleAddShape("heart") }}>
                              <img src={require("assets/img/editorResources/editor_heart.png").default} style={btnImageStyle} alt="Heart" onClick={this.myfunction} />
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.handleAddShape("star") }}>
                              <img src={require("assets/img/editorResources/editor_star.png").default} style={btnImageStyle} alt="Star" onClick={this.myfunction} />
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.handleAddShape("triangle") }}>
                              <img src={require("assets/img/editorResources/editor_triangle.png").default} style={btnImageStyle} alt="Triangle" onClick={this.myfunction} />
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.handleAddShape("circle") }}>
                              <img src={require("assets/img/editorResources/editor_circle.png").default} style={btnImageStyle} alt="Circle" onClick={this.myfunction} />
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.handleAddShape("square") }}>
                              <img src={require("assets/img/editorResources/editor_square.png").default} style={btnImageStyle} alt="Square" onClick={this.myfunction} />
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.handleAddShape("xmas") }}>
                              <img src={require("assets/img/editorResources/editor_xmas.png").default} style={btnImageStyle} alt="XmasTree" onClick={this.myfunction} />
                              </Button>

                            </div>
                          </Accordion.Collapse>
                        </Card>

                      </Accordion>
                      <Button onClick={
                        (e)=>{
                          this.toggleViewMode()
                          e.preventDefault()
                        this.download()
                      }}>{this.handleViewMode()} </Button>
                    </Card>
                  </Col>
                </Col>

                <Col id="middleComponent" className="col-6" style={{ zIndex: 1, display: 'flex', justifyContent: 'space-between', position: 'relative'}} >
                  <Card id="editor" className="card shadow" style={{ height: "800px", maxWidth: "825px", position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>

                    <MaskEditor width={825} height={800} maskOverlay={this.state.maskOverlay} preExport={this.state.preExport} decorations={this.state.decorations} 
                    maskType={this.state.maskType} ref="editor"/>

                  </Card>
                </Col>

                <Col id="rightComponent" className="col-3" style={{zIndex: 0}}>
                  <Col style={{userSelect: 'none'}}>
                  <Accordion>
                  <Accordion as={CardHeader} eventKey="4">
                    <img alt="" className="text-white" src={require("assets/svg/layer.svg").default}/>{" "} Layers
                  </Accordion>
                    <Card className="card shadow" style={{ height: (800-65), overflowY: 'scroll' }}>

                      {this.state.decorations.map((el, index) =>
                        (<div style={simpleLayer} key={index}>
                          <div style={{display: 'flex', backgroundColor:"#AAAAAA", alignItems: 'center', justifyContent: 'center', borderWidth: '1px', borderStyle:'double', width:56, height:42}}>
                            <img alt="" src={el} style={{ maxWidth:54, maxHeight:40, preserveAspectRatio: true}}></img>
                          </div>
                          {" "}
                          <span >
                            {
                            `Layer ${index + 1}: ${ this.nameParser(this.state.decorations[index])}`
                            }
                          </span>
                          <span style={trashStyle}>
                            {<TrashCan onClick={() => { 
                              this.handleUndoDecoration(index)
                              this.forceUpdate()
                              }}/>}
                          </span>
                        </div>)
                      )}

                    </Card>
                    </Accordion>
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

