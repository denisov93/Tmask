import React, { Component } from 'react';
import { Path } from 'react-konva';
import Konva from 'konva';

class Circle extends Component {

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
            scaleX={0.005}
            scaleY={0.005}
            data={"M6147 11539 c-868 -38 -1750 -305 -2495 -756 -663 -401 -1234 -942 -1661 -1573 -853 -1262 -1127 -2803 -761 -4279 234 -939 715 -1788 1405 -2476 426 -425 870 -743 1410 -1010 251 -123 432 -198 680 -281 945 -315 1999 -353 2975 -109 1181 297 2239 1000 2963 1970 598 800 942 1691 1044 2699 21 211 24 743 5 946 -98 1040 -452 1959 -1068 2770 -288 380 -650 741 -1034 1032 -761 575 -1675 938 -2630 1043 -132 14 -535 36 -615 33 -22 0 -120 -5 -218 -9z"}
            fill={this.state.color}
            name={name}
            onClick={this.handleClick}
            draggable
        />)
    }
}

export default Circle;