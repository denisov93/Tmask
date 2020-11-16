import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import ColoredRect from 'components/ColoredRect.js';
import App from "components/App.js"
 
class MaskEditor extends React.Component {
    state = {
        stageWidth: 1000,
        stageHeight: 1000
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
            <Stage width={this.state.stageWidth} height={this.state.stageHeight}>
              <Layer>
                <ColoredRect />
              </Layer>
            </Stage></div>
          );
        }
      }

export default MaskEditor