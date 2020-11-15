import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class ColoredRect extends React.Component {
  state = {
    color: 'red'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Rect
        x={100}
        y={100}
        draggable={true}
        width={200}
        height={200}
        fill={this.state.color}
        onClick={this.handleClick}
      />
    );
  }
}

export default ColoredRect