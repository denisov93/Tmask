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
            scaleX={0.005}
            scaleY={0.005}
            data={"M6212 11214 c-18 -17 -350 -580 -800 -1359 -716 -1239 -931 -1610 -1862 -3220 -194 -335 -617 -1067 -940 -1625 -323 -558 -746 -1289 -940 -1625 -1291 -2232 -1576 -2724 -1597 -2760 -30 -53 -30 -106 1 -142 l24 -28 6167 -3 6166 -2 31 30 c26 26 29 37 26 73 -3 34 -173 336 -949 1677 -521 899 -1893 3271 -3049 5270 -1157 1999 -2113 3651 -2125 3670 -30 47 -47 60 -88 67 -28 4 -40 0 -65 -23z"}
            fill={this.state.color}
            name={name}
            onClick={this.handleClick}
            draggable
        />)
    }
}

export default Triangle;