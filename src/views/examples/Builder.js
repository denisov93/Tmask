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

import { SketchPicker } from 'react-color';

// nodejs library that concatenates classes
import MaskEditor from "components/MaskEditor.js"
import AppBase from "components/AppBase.js";
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
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { ReactComponent as TrashCan } from 'assets/svg/trash.svg';
import Accordion from 'react-bootstrap/Accordion';

const DRAWER_1 = "Masks"
const DRAWER_2 = "Materials"
const DRAWER_3 = "Images"
const DRAWER_4 = "Painting"
const DRAWER_5 = "Decorations"
const DRAWER_LAYERS = "Decoration Layers"

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

	
const btnBuyStyle = {	
    color: '#525F7F',
    background: "#F4F5F7",
    borderWidth: '3px',
    borderStyle: 'solid',
    width: '120px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

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

// eslint-disable-next-line
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

class Builder extends AppBase {

  state = {
    shareChecked: false,
    expanded: '',
    selectedLayer:-1,
    decorations: [],
    maskType: mask,
    maskBB:[],
    preExport : false,
    maskOverlay: mOverlay1,
    viewMode: false, // >>> if maskOverlay is visible in canvas
    clearDraw: false,
    canDraw: false,
    modalOpen: false,
    sessionID:-1,
    user:'',
    pass:'',
    tags:[],
    title:'',
    description:'',
    background: '#fff',
    modalColorOpen: false,
    pickerIsVisible: false
  };

  handleLoad(){
    
  }

  handleClearDrawing(){
    this.setState({ clearDraw: true })
    this.handleFixClear()
  }

  async handleFixClear(){
    await setTimeout(25)
    this.setState({ clearDraw: false })
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

  toggleCanDraw(){
    this.setState({
      canDraw: !this.state.canDraw
    })
  }

  toggleColorPicker(){
    this.setState({
      pickerIsVisible: !this.state.pickerIsVisible
    },(e)=>{
      //changed state
    })
  }

  handleCanDrawOption(){
    const active = (
      <div style={{display:'flex', height: 30, width: 30, flexDirection: 'column', alignItems: 'bottom', justifyContent: 'center'}}>
        <div style={{paddingBottom:'-40px', paddingTop:'13px'}}><h3><i className="fa fa-toggle-on" style={{color: '#33AA55'}}></i></h3></div>
      </div>
    )
    const inactive = (
      <div style={{display:'flex', height: 30, width: 30, flexDirection: 'column', alignItems: 'bottom', justifyContent: 'center', transform: 'rotate(180deg)'}}>
          <div><h3><i className="fa fa-toggle-on" style={{color: '#444444'}}></i></h3></div>
      </div>
    )

    if(this.state.canDraw){
      return(
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div>Pen</div>
            {active}
        </div>
      )
    }else{
        return(
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>Pen</div>
              {inactive}
          </div>
        )
    }
  }

  toggleShareCheck(){
    this.setState({
      shareChecked: !this.state.shareChecked
    })
    setTimeout(()=>{
      if(this.state.shareChecked){
        if(!this.userHasSession()){
          this.setState({modalOpen: true})
          
        }
      }
    },200);
  }

  handleViewMode(){
    if(this.state.viewMode){
        return(
          <div style={{display: 'flex', maxHeight:'30px', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <div></div>
              <div>How it looks?</div><div style={{paddingTop: '5px'}}><h3><i className="fa fa-eye" style={{color:'#006600'}}></i></h3></div>
              <div></div>
          </div>
        )
    }else{
        return(
          <div style={{display: 'flex', maxHeight:'30px', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <div></div>
              <div>How it looks?</div><div style={{paddingTop: '5px'}}><h3><i className="fa fa-eye-slash" style={{color:'#990000'}}></i></h3></div>
              <div></div>
          </div>
        )
    }
  }

  handleShareChecked(){
        if(this.state.shareChecked){
            return(
              <div style={{display: 'flex', maxHeight:'40px', alignItems: 'center', justifyContent: 'space-between'}}>
                <div><h4><i className="fa fa-check-square" style={{color:'#525F7F'}}></i></h4></div><div>Write tag and submit!</div>
              </div>
            )
        }else{
            return(
              <div style={{display: 'flex', maxHeight:'40px', alignItems: 'center', justifyContent: 'space-between'}}>

                <div><h4><i className="fa fa-square" style={{color:'#AAAAAA'}}></i></h4></div><div>Share my design</div></div>)
        }
  }

  addMaskToCollection=()=>{
    
    var title = this.state.title
    var image = this.refs.editor.handleExportImage()
    var tags = []
    var description = this.state.description

    var data = {
      id : Math.floor(1000 + Math.random() * 9000),
      title: title,
      image: image,
      description: description,
      tags: tags.concat(this.state.tags)
    }

    var ms = this.getCookie("addedMasks")

    if(ms === null){
      ms = []
    }

    ms.push(data)

    this.setCookie("addedMasks",ms);
  }

  handleDeleteLayer = item =>{
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
        if(file instanceof Blob)
          reader.readAsDataURL(file);
    };  

    reader.onloadend = ( ) => this.handleImageBB(img);
    
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  setModalOpen = () =>{
    this.setState({modalColorOpen: !this.state.modalColorOpen})
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    
    let ss = this.getCookie("sessionID")
    if( ss !== null )
      this.setState({sessionID:ss})
    
    console.log("Session ID:",this.state.sessionID)
    
  }

  displayColorPicker(){
    try{
      if(this.state.pickerIsVisible){
          const elem = document.getElementById("btnColorWheel")
          const window = document.body.getBoundingClientRect()
          const btnColorWheel = elem.getBoundingClientRect()
          var offset = window.top;
          console.log("Offset: "+offset)
          return(<div style={{position: 'absolute', zIndex:10, top:btnColorWheel.y-10-offset, left:btnColorWheel.x+25}}>
                <SketchPicker
                    color={ this.state.background }
                    onChangeComplete={ this.handleChangeComplete }/>
                </div>)
      }else{
        return(<div></div>)
      }
    }catch{/*case where btn isn't visible*/}
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

                {this.displayColorPicker()}

                  <Col style={{userSelect: 'none'}}>
                    <Card className="card shadow" style={{ height: "800px" }}>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={CardHeader} eventKey="0">
                          {" "}<i className="fa fa-head-side-mask"></i>{" "}<i className="fa fa-shield"></i> {DRAWER_1}
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
                            <i className="fa fa-cubes"></i> {DRAWER_2}
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
                            <i className="fa fa-image"></i> {DRAWER_3}
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
                              <h3 style={{paddingLeft:'4px'}}><font color='EEEEEE'><i className="fa fa-cloud-upload"></i></font></h3>
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
                            <i className="fa fa-paint-brush"></i> {DRAWER_4}
                            </Accordion.Toggle>
                          <Accordion.Collapse style={accordionStyle} eventKey="3">
                            <div style={RAM}>
                              <Button
                                id = "btnColorWheel"
                                color="primary"
                                style={btnOptionStyle}
                                onClick={() => {  }}>
                              <img src={require("assets/img/editorResources/editor_colorwheel.png").default} 
                                style={btnImageStyle} alt="" 
                                onClick={()=> this.toggleColorPicker() } />
                              </Button>
                              <Button
                                color="primary"
                                style={btnOptionStyle}
                                onClick={() => { this.toggleCanDraw() }}>
                                  {this.handleCanDrawOption()}
                              </Button>
                              <Button
                                color="primary"
                                style={btnOptionStyle}
                                onClick={() => {this.handleClearDrawing() }}>
                                  Clear Drawing
                              </Button>

                            </div>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={CardHeader} eventKey="4">
                            <i className="fa fa-star"></i> {DRAWER_5}
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

                    <MaskEditor 
                      width={825} height={800} canDraw={this.state.canDraw} maskOverlay={this.state.maskOverlay} preExport={this.state.preExport} 
                      decorations={this.state.decorations} maskType={this.state.maskType} clearDraw={this.state.clearDraw} 
                      ref="editor"/>

                    { (this.state.sessionID === -1) && //!this.state.hasSession &&
                    <Modal className='modal-dialog-centered' toggle={() => {
                      this.setState({modalOpen: !this.state.modalOpen})
                      this.setState({shareChecked: !this.state.shareChecked})
                      }} 
                      
                      isOpen={this.state.modalOpen}>
                      <div className="text-muted text-center mb-3">
                        <br></br>
                        <big>You need to be signed in to <strong>share</strong>.</big>
                      </div>
                      <ModalBody>
                      <div className="text-center text-muted mb-4">
                        <small>Try one of the following test users:<br></br>
                              <b>alicia</b>, <b>jonny</b>, <b>nahla</b>, <b>pedro</b><br></br>
                              No password required.
                        </small>
                        </div>
                        <Form role="form" /*onSubmit={ this.handleSubmit}*/>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input id="id_account" placeholder="Username / Email" type="username" onChange={e=> this.setState({user: e.target.value})} />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              id="id_password"
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              onChange={e=> this.setState({pass: e.target.value})}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                      </Form>
                      </ModalBody>
                      <ModalFooter>
                      <div className="text-center">
                          <Button //type="submit"
                              className="my-4"
                              color="primary"
                              onClick={()=>{ 
                                let login = this.validateSignIn(this.state.user,this.state.pass)
                                if(login){
                                  this.setState({sessionID:0})
                                }
                              }
                              }//this.pressedSubmit()}}
                              >
                             SIGN IN
                          </Button>
                        </div>
                        <Button
                          color="secondary"
                          type="button"
                          onClick={() => {
                            this.setState({modalOpen: !this.state.modalOpen})
                            this.setState({shareChecked: !this.state.shareChecked})
                          }}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </Modal>}
                    { (this.state.sessionID !== -1) && //this.state.hasSession &&
                      <Modal className='modal-dialog-centered' toggle={() => {
                        this.setState({modalOpen: !this.state.modalOpen})
                        this.setState({shareChecked: !this.state.shareChecked})
                        }} 
                        
                        isOpen={this.state.modalOpen}>
                        <div className="text-muted text-center mb-3">
                          <br></br>
                          <big><strong>Sharing with the community!</strong></big>
                        </div>
                        <ModalBody>
                        
                          <Form role="form" /*onSubmit={ this.handleSubmit}*/>
                          <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  Title:
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input  placeholder="Write the name of your mask" type="text" onChange={
                                e=>{
                                  var str = e.target.value; 
                                  if(str.length < 32){
                                    this.setState({title: str})
                                  }
                                }} />
                            </InputGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  Description:
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input  placeholder="Write a description about it." type="text" onChange={
                                e=>{
                                  var str = e.target.value; 
                                  if(str.length < 400){
                                    this.setState({description: str})
                                  }
                                }} />
                            </InputGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType='prepend'>
                                <InputGroupText>
                                  <i className="fa fa-hashtag" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input  placeholder="Write Tags so other users can find this content." type="text" onChange={
                                e=>{
                                  var str = e.target.value;
                                  if(str.length < 200){
                                    var res = str.replace(/[, .]/g, (_, m1) => m1 ? "# " : '');
                                    this.setState({tags: res})
                                  }
                                }} />
                            </InputGroup>
                          </FormGroup>
                          <div style={{overflowWrap: 'break-word'}}>
                              <big>A mask with {this.state.decorations.length} decorations will be Shared.</big>
                              <br></br><br></br>
                              <span>🖋️{" "}<b>Title:</b> </span> { this.state.title }
                              <br></br>
                              <span>📃{" "}<b>Description:</b> </span> { this.state.description }
                              <br></br>
                              <span>🏷️{" "}<b>Tags:</b> </span> { this.state.tags }
                          </div>
                            
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                        <div className="text-center">
                            <Button //type="submit"
                                className="my-4"
                                color="primary"
                                onClick={()=>{
                                  this.addMaskToCollection()
                                  this.setState({modalOpen: !this.state.modalOpen})
                                  this.setState({shareChecked: !this.state.shareChecked})
                                }}
                                >
                               Share
                            </Button>
                          </div>
                          <Button
                            color="secondary"
                            type="button"
                            onClick={() => {
                              this.setState({modalOpen: !this.state.modalOpen})
                              this.setState({shareChecked: !this.state.shareChecked})
                            }}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </Modal>
                    }

                  </Card>
                </Col>

                <Col id="rightComponent" className="col-3" style={{zIndex: 0}}>

                  <Col style={{userSelect: 'none'}}>
                  <Accordion>
                    <Accordion as={CardHeader}>
                      <img alt="" className="text-white" src={require("assets/svg/layer.svg").default}/>{" "} {DRAWER_LAYERS}
                    </Accordion>
                    <Card className="card shadow">
                      <div style={{ overflowY: 'scroll', height: 583, maxHeight: 583 }}>
                      {this.state.decorations.map((el, index) =>
                        (<div style={simpleLayer} key={index}>
                          <div style={{display: 'flex', backgroundColor:"#AAAAAA", alignItems: 'center', justifyContent: 'center', borderWidth: '1px', borderStyle:'double', width:56, height:42}}>
                            <img alt="" src={el} style={{ maxWidth:54, maxHeight:40, preserveAspectRatio: true}}></img>
                          </div>
                          {" "}
                          <span >
                            {
                            `Decoration ${index + 1}: ${ this.nameParser(this.state.decorations[index])}`
                            }
                          </span>
                          <span style={trashStyle}>
                            {<TrashCan onClick={() => {this.handleDeleteLayer(index)}}/>}
                          </span>
                        </div>)
                      )}
                      </div>

                      <Card>
                      <Accordion as={CardHeader} onClick={(e)=>{this.toggleShareCheck()}}>
                            {this.handleShareChecked()}
                      </Accordion>
                    </Card>

                    <Card>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:65 }}>
                        <Button style={btnBuyStyle}>
                            <i className="fa fa-shopping-cart"></i> Buy
                        </Button>
                      </div>
                    </Card>

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
