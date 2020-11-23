import React, { Component } from 'react';
import { Path } from 'react-konva';
import Konva from 'konva';

import URLImage from 'components/URLImage';
import PropTypes from 'prop-types';


class ImageLayer extends Component {

    

    handleClick = () => {
        console.log(this)
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    };

    render() {
        const { name } = this.props;
        return (
            <URLImage 
            src={ this.props.imageLayer } 
            x={300}
            y={300}
            scaling={true}
            draggable
            />)
    }
}

ImageLayer.propTypes ={
    imageLayer : PropTypes.string.isRequired
  }

export default ImageLayer;