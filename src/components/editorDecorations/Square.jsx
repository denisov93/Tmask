import React, { Component } from 'react';
import { Path } from 'react-konva';
import Konva from 'konva';

class Square extends Component {

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
            scaleX={0.1}
            scaleY={0.1}
            data={"M 500.75,0.75 C 500.75,0.75 500.75,500.75 500.75,500.75 500.75,500.75 0.75,500.75 0.75,500.75 0.75,500.75 0.75,0.75 0.75,0.75 0.75,0.75 500.75,0.75 500.75,0.75 Z M 500.00,0.00 C 500.00,0.00 500.00,500.00 500.00,500.00 500.00,500.00 0.00,500.00 0.00,500.00 0.00,500.00 0.00,0.00 0.00,0.00 0.00,0.00 500.00,0.00 500.00,0.00 Z M 501.00,-1.00 C 501.00,-1.00 501.00,501.00 501.00,501.00 501.00,501.00 -1.00,501.00 -1.00,501.00 -1.00,501.00 -1.00,-1.00 -1.00,-1.00 -1.00,-1.00 501.00,-1.00 501.00,-1.00 Z"}
            fill={this.state.color}
            name={name}
            onClick={this.handleClick}
            draggable
        />)
    }
}

export default Square;