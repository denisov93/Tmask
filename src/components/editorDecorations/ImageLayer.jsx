import React, { Component } from 'react';
// eslint-disable-next-line
import { Path } from 'react-konva';
// eslint-disable-next-line
import Konva from 'konva';

import URLImage from 'components/URLImage';
import PropTypes from 'prop-types';

class ImageLayer extends Component {

    state = {
        opacity: 0.7
    }

    handleClick = () => {
        console.log("Pressed an image")
    };

    onDragMove = (e) => {

    }

    onDragEnd = (e) => {
        
    }

    render() {
        const { name } = this.props;
        return (<URLImage canChange={true} canDrag={true} opacitySwitch={true}
            name={name}
            src={ this.props.imageLayer } 
            x={75}
            y={75}
            scaling={true}
            draggable={true}
            opacity={this.state.opacity}
            onClick={this.handleClick}
            onDragMove={this.onDragMove}
            onDragEnd={this.onDragEnd}
            />)
    }
}

ImageLayer.propTypes ={
    imageLayer : PropTypes.string.isRequired,
  }

export default ImageLayer;