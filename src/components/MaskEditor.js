import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import ColoredRect from 'components/ColoredRect.js';
import Heart from 'components/editorDecorations/Heart';
import Star from 'components/editorDecorations/Star';
import URLImage from 'components/URLImage';
import mask from '../assets/img/masks/white.png';
import Transformer from 'components/Transformer';
import Drawing from 'components/Drawing';
import BrushOptions from 'components/BrushOptions';
import Button from 'components/UniversalButton';

import PropTypes from 'prop-types';

class MaskEditor extends React.Component {
    state = {
        stageWidth: 1000,
        stageHeight: 1000,
        selectedShapeName: '',
        decorations: [],
        brushColor: '#000000'
      };

      componentDidMount() {
        this.checkSize();
        // here we should add listener for "container" resize
        // take a look here https://developers.google.com/web/updates/2016/10/resizeobserver
        // for simplicity I will just listen window resize
        window.addEventListener("resize", this.checkSize);
      }
    
      selectedShapeName(){
        alert(this.state.selectedShapeName)
      }

      componentWillUnmount() {
        window.removeEventListener("resize", this.checkSize);
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
          this.setState({
            selectedShapeName: name
          });
        } else if (name === `star${e.target.index}`) {
          this.setState({
            selectedShapeName: name
          });
        } else {
          this.setState({
            selectedShapeName: ''
          });
        }
      };
    
      handleAddHeart = () => {
        this.setState({
          decorations: [...this.state.decorations, "<3"]
        })
      }

      handleAddStar = () => {
        this.setState({
          decorations: [...this.state.decorations, "*"]
        })
      }
    
      handleExportClick = () => {
        const dataURL = this.stageRef.getStage().toDataURL();
        this.downloadURI(dataURL, "mask.jpg");
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

        render() {
          
          // Stage is a div container
          // Layer is actual canvas element (so you may have several canvases in the stage)
          // And then we have canvas shapes inside the Layer
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
            <URLImage src={mask} ref={node => { this.maskRef = node }} />
          </Layer>
          <Layer>
            <Drawing width={1000} height={800} color={this.state.brushColor} />
          </Layer>
          <Layer>
            {
            this.props.decorations.map(
              (el, index) => 
              {
                if(el === "<3"){
                  return (<Heart key={index} color={this.state.value} name={`heart${index}`}></Heart>)
                }else if(el === "*"){
                  return (<Star key={index} color={this.state.value} name={`star${index}`}></Star>)
                }
              })
            }
            <Transformer
              selectedShapeName={this.state.selectedShapeName}
            />
          </Layer>
        </Stage>
        
        <BrushOptions value={this.state.brushColor} onChange={this.handleBrushColorChoice} />
            
            </div>
          );
        }
      }

MaskEditor.propTypes ={
  decorations : PropTypes.array.isRequired,
  selectedShapeName: PropTypes.string.isRequired
}

export default MaskEditor