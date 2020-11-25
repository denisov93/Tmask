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
        //console.log("Pressed an image")
    };

    render() {
        const { name } = this.props;
        return (<URLImage canChange={true} canDrag={true} opacity={0.7} opacitySwitch={true}
            name={name}
            src={ this.props.imageLayer } 
            x={300}
            y={300}
            scaling={true}
            draggable={true}
            opacity={this.state.opacity}
            onClick={this.handleClick}
            />)
    }
}

ImageLayer.propTypes ={
    imageLayer : PropTypes.string.isRequired,
  }

export default ImageLayer;