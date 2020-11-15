import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import ColoredRect from 'components/ColoredRect.js';
 
class MaskEditor extends React.Component {
        render() {
          // Stage is a div container
          // Layer is actual canvas element (so you may have several canvases in the stage)
          // And then we have canvas shapes inside the Layer
          return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                <ColoredRect />
              </Layer>
            </Stage>
          );
        }
      }

export default MaskEditor