import React, { Component } from 'react';
import { Path } from 'react-konva';
import Konva from 'konva';

class Triangle extends Component {

    state = {
        color: 'grey'
    }

    handleClick = () => {
        console.log(this)
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    };

    render() {
        const { name } = this.props;
        return (<Path
            x={300}
            y={300}
            scaling={true}
            scaleX={1}
            scaleY={1}
            data={""}
            fill={this.state.color}
            name={name}
            onClick={this.handleClick}
            draggable
        />)
    }
}

export default Triangle;