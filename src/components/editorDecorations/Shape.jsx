// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import { Path } from 'react-konva';
// eslint-disable-next-line
import Konva from 'konva';
import AppBase from "components/AppBase.js";

class Shape extends AppBase {

    state = {
        color: "#444444"
    }

    handleClick = (e) => {
        var color = this.getCookie("editorPickedColor")
        this.setState({
            color: color
        });
    };
}

export default Shape;