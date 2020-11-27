import React from 'react';
import { Stage, Layer } from 'react-konva';
// eslint-disable-next-line
import Konva from 'konva';
import Heart from 'components/editorDecorations/Heart';
import Star from 'components/editorDecorations/Star';
import Triangle from 'components/editorDecorations/Triangle';
import Square from 'components/editorDecorations/Square';
import Circle from 'components/editorDecorations/Circle';
import Xmas from 'components/editorDecorations/XmasTree';
import URLImage from 'components/URLImage';

import Transformer from 'components/Transformer';
import Drawing from 'components/Drawing';
import BrushOptions from 'components/BrushOptions';

import PropTypes from 'prop-types';
import ImageLayer from './editorDecorations/ImageLayer';
import ajuda from 'assets/css/ajuda.css'

class MaskEditor extends React.Component {
    state = {
        stageWidth: this.props.width,
        stageHeight: this.props.height,
        selectedShapeName: '',
        brushColor: '#000000',
        showTransformer: true
      };

      componentDidMount() {
        this.checkSize();
        window.addEventListener("resize", this.checkSize);
      }

      componentWillUnmount() {
        window.removeEventListener("resize", this.checkSize);
      }

      componentDidUpdate(){
        
      }

      handleStageMouseDown = e => {
        // clicked on stage - clear selection
        if (e.target === e.target.getStage()) {
          this.setState({
            selectedShapeName: ''
          });
          return;
        }
        // clicked on transformer - do nothing
        const clickedOnTransformer =
          e.target.getParent().className === 'Transformer';
        if (clickedOnTransformer) {
          return;
        }
    
        // find clicked shape by its name
        const name = e.target.name();
        if (name === `heart${e.target.index}`) {
          console.log("Selected Shape: " + name)
          this.setState({
            selectedShapeName: name
          });
        } else if (name === `star${e.target.index}`) {
          console.log("Selected Shape: " + name)
          this.setState({
            selectedShapeName: name
          });
        } else if (name === `triangle${e.target.index}`) {
          console.log("Selected Shape: " + name)
          this.setState({
            selectedShapeName: name
          });
        } else if (name === `circle${e.target.index}`) {
          console.log("Selected Shape: " + name)
          this.setState({
            selectedShapeName: name
          });
        } else if (name === `square${e.target.index}`) {
          console.log("Selected Shape: " + name)
          this.setState({
            selectedShapeName: name
          });
        } else if (name === `xmas${e.target.index}`) {
          console.log("Selected Shape: " + name)
          this.setState({
            selectedShapeName: name
          });
        } else if (name === `image${e.target.index}`) {
          console.log("Selected Image: " + name)
          this.setState({
            selectedShapeName: name
          });
        } else {
          this.setState({
            selectedShapeName: ''
          });
        }
      };
   
      handleExportClick = () => {
        const dataURL = this.stageRef.getStage().toDataURL();
        this.downloadURI(dataURL, "mask.jpg");
      }
    
      triggerShapeDeselection = () =>{
        this.setState({
          selectedShapeName: ''
        });
      }

      handleExportImage = () =>{
        this.triggerShapeDeselection()
        // eslint-disable-next-line
        this.state.selectedShapeName = ''
        // eslint-disable-next-line
        this.state.showTransformer = false
        this.setState({
            selectedShapeName: '',
            showTransformer: false,
          });
        return this.prepareExportImage()
      }

      prepareExportImage(){
        var stage = this.stageRef.getStage()
        const dataURL = stage.toDataURL();
        this.state.showTransformer = true
        this.setState({
            selectedShapeName: '',
            showTransformer: true,
          });
        return dataURL
      }

      downloadURI(uri, name) {
        const link = window.document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        //delete link;
      }
    
      handleBrushColorChoice = (e) => {
          this.setState({ brushColor: e.target.value })
      }

      checkSize = () => {
        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;
        this.setState({
          stageWidth: width,
          stageHeight: height
        });
      };

      processTransformerVisibility(){
        if(this.state.showTransformer){
          return(<Transformer selectedShapeName={this.state.selectedShapeName}/>)
        }else{
          return(<Transformer selectedShapeName={''}/>)
        }
      }

      render() {

          let transformer = this.processTransformerVisibility()

          return (
            <div style={{
              width: "auto",
              height: "798px"
            }}
            ref={node => {
              this.container = node;
            }}
          >
            <Stage width={this.state.stageWidth} height={this.state.stageHeight} ref={node => { this.stageRef = node }} onMouseDown={this.handleStageMouseDown}>
          <Layer>
            <URLImage src={ this.props.maskType } canChange={false} canDrag={false} opacity={1} opacitySwitch={false} ref={node => { this.maskRef = node }}/>
          </Layer>
          <Layer>
            <Drawing clearDraw={this.props.clearDraw} canDraw={this.props.canDraw} width={this.state.stageWidth} height={this.state.stageHeight} color={this.state.brushColor} />
          </Layer>
          <Layer>
            {
            this.props.decorations.map(
              (el, index) => 
              {
                if(el === "heart"){
                  return (<Heart key={index} color={this.state.value} name={`heart${index}`}></Heart>)
                }else if(el === "star"){
                  return (<Star key={index} color={this.state.value} name={`star${index}`}></Star>)
                }else if(el === "triangle"){
                  return (<Triangle key={index} color={this.state.value} name={`triangle${index}`}></Triangle>)
                }else if(el === "circle"){
                  return (<Circle key={index} color={this.state.value} name={`circle${index}`}></Circle>)
                }else if(el === "square"){
                  return (<Square key={index} color={this.state.value} name={`square${index}`}></Square>)
                }else if(el === "xmas"){
                  return (<Xmas key={index} color={this.state.value} name={`xmas${index}`}></Xmas>)
                }else
                  return (
                  <ImageLayer key={index} name={`image${index}`} imageLayer={el} canChange={true} canDrag={true} opacity={0.7} opacitySwitch={true}></ImageLayer>
                  )
              })
            }
            {transformer}
            {this.props.preExport && 
            <URLImage src={ this.props.maskOverlay } className={ajuda.ajuda} canChange={false} canDrag={false} opacity={1} opacitySwitch={false} ref={node => { this.maskRef = node }}/>
            }
          </Layer>

          
        </Stage>
        
        <BrushOptions value={this.state.brushColor} onChange={this.handleBrushColorChoice} />
            
            </div>
          );
        }
      }

MaskEditor.propTypes ={
  decorations : PropTypes.array.isRequired,
  maskType: PropTypes.string.isRequired,
  preExport: PropTypes.bool.isRequired,
  maskOverlay: PropTypes.string.isRequired,
  clearDraw: PropTypes.bool.isRequired,
}

export default MaskEditor