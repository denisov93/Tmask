import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import ColoredRect from 'components/ColoredRect.js';
import Heart from 'components/Heart';
import URLImage from 'components/URLImage';
import mask from '../assets/img/masks/white.png';
import Transformer from 'components/Transformer';
import Drawing from 'components/Drawing';
import BrushOptions from 'components/BrushOptions';
import Button from 'components/UniversalButton';

class MaskEditor extends React.Component {
    state = {
        stageWidth: 1000,
        stageHeight: 1000,
        selectedShapeName: '',
        hearts: [],
        brushColor: '#E0BBE4'
      };
      componentDidMount() {
        this.checkSize();
        // here we should add listener for "container" resize
        // take a look here https://developers.google.com/web/updates/2016/10/resizeobserver
        // for simplicity I will just listen window resize
        window.addEventListener("resize", this.checkSize);
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
        } else {
          this.setState({
            selectedShapeName: ''
          });
        }
      };
    
      handleAddHeart = () => {
        this.setState({
          hearts: [...this.state.hearts, "<3"]
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
            <Stage width={this.stageWidth} height={this.state.stageHeight} ref={node => { this.stageRef = node }} onMouseDown={this.handleStageMouseDown}>
          <Layer>
            <URLImage src={mask} ref={node => { this.maskRef = node }} />
          </Layer>
          <Layer>
            <Drawing width={600} height={565} color={this.state.brushColor} />
          </Layer>
          <Layer>
            {this.state.hearts.map((el, index) =>
              (<Heart key={index} color={this.state.value} name={`heart${index}`}></Heart>)
            )}
            <Transformer
              selectedShapeName={this.state.selectedShapeName}
            />
          </Layer>
        </Stage>
        <Button onClick={this.handleExportClick} text="Download" />
        <Button onClick={this.handleAddHeart} text="Add heart" />
        <BrushOptions value={this.state.brushColor} onChange={this.handleBrushColorChoice} />
            
            </div>
          );
        }
      }

export default MaskEditor