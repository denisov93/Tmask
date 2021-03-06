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
// eslint-disable-next-line
import BrushOptions from 'components/BrushOptions';

import PropTypes from 'prop-types';
import ImageLayer from './editorDecorations/ImageLayer';
import ajuda from 'assets/css/ajuda.css'

class MaskEditor extends React.Component {
  state = {
    stageWidth: this.props.width,
    stageHeight: this.props.height,
    selectedShapeName: '',
    brushColor: '#444444',
    showTransformer: true
  };

  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }

  componentDidUpdate() {

  }

  handleStageMouseDown = e => {
    // clicked on stage - clear selection
    if (e.target === e.target.getStage()) {
      this.setState({
        selectedShapeName: '',
        brushColor: this.props.paintColor
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

    this.props.selectedShapeName(name)

    if (name === `heart${e.target.index}`) {
      this.setState({
        selectedShapeName: name,
        brushColor: this.props.paintColor,
      });
    } else if (name === `star${e.target.index}`) {
      this.setState({
        selectedShapeName: name,
        brushColor: this.props.paintColor,
      });
    } else if (name === `triangle${e.target.index}`) {
      this.setState({
        selectedShapeName: name,
        brushColor: this.props.paintColor,
      });
    } else if (name === `circle${e.target.index}`) {
      this.setState({
        selectedShapeName: name,
        brushColor: this.props.paintColor,
      });
    } else if (name === `square${e.target.index}`) {
      this.setState({
        selectedShapeName: name,
        brushColor: this.props.paintColor,
      });
    } else if (name === `xmas${e.target.index}`) {
      this.setState({
        selectedShapeName: name,
        brushColor: this.props.paintColor,
      });
    } else if (name === `image${e.target.index}`) {
      this.setState({
        selectedShapeName: name,
        brushColor: this.props.paintColor,
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

  triggerShapeDeselection = () => {
    this.setState({
      selectedShapeName: ''
    });
  }

  handleExportImage = () => {
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

  prepareExportImage() {
    var stage = this.stageRef.getStage()
    const dataURL = stage.toDataURL();
    // eslint-disable-next-line
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

  processLayers() {
    return (<Layer>{
      this.props.decorations.map(
        (el, index) => {
          if (el === "heart") {
            return (<Heart key={index} color={this.props.paintColor} name={`heart${index}`}></Heart>)
          } else if (el === "star") {
            return (<Star key={index} color={this.props.paintColor} name={`star${index}`}></Star>)
          } else if (el === "triangle") {
            return (<Triangle key={index} color={this.props.paintColor} name={`triangle${index}`}></Triangle>)
          } else if (el === "circle") {
            return (<Circle key={index} color={this.props.paintColor} name={`circle${index}`}></Circle>)
          } else if (el === "square") {
            return (<Square key={index} color={this.props.paintColor} name={`square${index}`}></Square>)
          } else if (el === "xmas") {
            return (<Xmas key={index} color={this.props.paintColor} name={`xmas${index}`}></Xmas>)
          } else
            return (
              <ImageLayer key={index} id={`image${index}`} name={`image${index}`} imageLayer={el} canChange={true} canDrag={true} opacity={0.7} opacitySwitch={true}></ImageLayer>
            )
        })}</Layer>)
  }

  processTransformerVisibility() {
    if (this.state.showTransformer) {
      return (<Layer><Transformer selectedShapeName={this.state.selectedShapeName} /></Layer>)
    } else {
      return (<Layer><Transformer selectedShapeName={''} /></Layer>)
    }
  }

  processOverlayVisibility() {
    return (
      <Layer>
        {this.props.preExport &&
          <URLImage src={this.props.maskOverlay} className={ajuda.ajuda} canChange={false} canDrag={false} opacity={1} opacitySwitch={false} ref={node => { this.maskRef = node }} />
        }
      </Layer>)
  }

  processDrawingLayer(){
    return(
      <Layer>
        <Drawing clearDraw={this.props.clearDraw} canDraw={this.props.canDraw} width={this.state.stageWidth} height={this.state.stageHeight} color={this.props.paintColor} />
      </Layer>)
  }

  processMaskBackground(){
    return(
      <Layer>
        <URLImage src={this.props.maskType} canChange={false} canDrag={false} opacity={1} opacitySwitch={false} ref={node => { this.maskRef = node }} />
      </Layer>)
  }


  render() {

    let overlay = this.processOverlayVisibility()
    let transformer = this.processTransformerVisibility()
    let layers = this.processLayers()
    let drawing = this.processDrawingLayer()
    let maskbg = this.processMaskBackground()

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

          {maskbg}
          {drawing}
          {layers}
          {transformer}
          {overlay}

        </Stage>

      </div>
    );
  }
}

MaskEditor.propTypes = {
  decorations: PropTypes.array.isRequired,
  maskType: PropTypes.string.isRequired,
  preExport: PropTypes.bool.isRequired,
  maskOverlay: PropTypes.string.isRequired,
  clearDraw: PropTypes.bool.isRequired,
  paintColor: PropTypes.string.isRequired,
}

export default MaskEditor