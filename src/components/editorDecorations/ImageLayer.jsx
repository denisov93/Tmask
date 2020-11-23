import React, { Component } from 'react';
// eslint-disable-next-line
import { Path } from 'react-konva';
// eslint-disable-next-line
import Konva from 'konva';

import URLImage from 'components/URLImage';
import PropTypes from 'prop-types';

class ImageLayer extends Component {

    state = {
        opacity: 1
    }

    handleClick = () => {
        console.log("Pressed an image")
        this.setState({
            opacity: 0.5
        });
    };

    render() {
        const { name } = this.props;
        return (<URLImage
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
    imageLayer : PropTypes.string.isRequired
  }

export default ImageLayer;