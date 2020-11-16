import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import Heart from 'components/Heart';
import URLImage from 'components/URLImage';
import tshirt from '../assets/img/tshirt.png';
import Transformer from 'components/Transformer';
//import Drawing from 'components/Drawing';
//import BrushOptions from 'components/BrushOptions';
import Button from 'components/UniversalButton';

class App extends Component {
  state = {
    selectedShapeName: 'cname',
    hearts: [],
    brushColor: '#E0BBE4'
  }

  handleStageMouseDown = e => {
    // clicked on stage - clear selection
    if (e.target === e.target.getStage()) {
      this.setState({
        selectedShapeName: 'cname'
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
        selectedShapeName: cname
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
    this.downloadURI(dataURL, "tshirt.jpg");
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

  render() {
    return (
      <div>
        <Stage width={600} height={565} ref={node => { this.stageRef = node }} onMouseDown={this.handleStageMouseDown}>
          <Layer>
            <URLImage src={tshirt} ref={node => { this.tshirtRef = node }} />
          </Layer>
          
          <Layer>
            
              <Heart color={this.state.value} name='cname'></Heart>
            
            <Transformer
              selectedShapeName={this.state.selectedShapeName}
            />
          </Layer>
        </Stage>
        <Button onClick={this.handleAddHeart} text="Add heart" />
        
      </div >
    );
  }
}

export default App;