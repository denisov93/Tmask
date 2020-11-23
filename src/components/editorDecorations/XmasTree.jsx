import React, { Component } from 'react';
import { Path } from 'react-konva';
import Konva from 'konva';

class XmasTree extends Component {

    state = {
        color: 'green'
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
            data={"m 55.422761,13.173674 c -1.98609,0.03016 -2.16979,5.493107 -3.75885,6.684898 -1.58906,1.191795 -6.88474,-0.161345 -7.4698,1.736862 -0.58506,1.898206 4.55374,3.760874 5.19616,5.640444 0.64242,1.879569 -2.28127,6.498207 -0.65676,7.641207 0.92329,0.649623 2.40691,-0.462279 3.88046,-1.549136 -0.74506,2.726858 -2.43017,6.193883 -6.60628,10.306896 -3.54151,3.48801 -11.78698,11.747645 -9.26271,16.029776 0.51919,0.880752 1.42617,1.440087 2.58162,1.773316 -0.0894,0.168516 -0.17894,0.337532 -0.26743,0.49407 -3.85591,6.820519 -17.32384,20.398671 -13.34505,27.14824 0.85675,1.453367 2.38355,2.35132 4.32828,2.866472 -6.89314,9.275431 -16.42509,21.369481 -12.41539,28.171471 3.718,6.30716 17.0567,4.62806 28.11079,3.12276 v 6.67728 c 0,4.41011 3.55051,7.96061 7.96061,7.96061 h 4.37998 c 4.41011,0 7.96061,-3.5505 7.96061,-7.96061 v -7.17435 c 11.47257,1.33262 26.667638,3.52111 30.546859,-3.34068 3.95735,-6.99997 -6.22557,-19.23258 -13.308579,-28.442988 1.24551,-0.559681 2.22497,-1.345991 2.836,-2.426817 3.855897,-6.820524 -9.85569,-20.152719 -13.83448,-26.902293 -0.0692,-0.11733 -0.13942,-0.246304 -0.20922,-0.370552 1.36295,-0.337402 2.42791,-0.940885 2.99434,-1.942814 2.44629,-4.327141 -6.22766,-12.196903 -9.57286,-15.873608 -4.02503,-4.423894 -5.9205,-7.802112 -6.83861,-10.341449 1.56711,1.079983 3.17436,2.266967 4.11551,1.561107 1.58906,-1.191793 -1.47335,-5.719331 -0.88828,-7.617537 0.58505,-1.898207 5.66499,-3.916224 5.02257,-5.795793 -0.64242,-1.87957 -5.89481,-0.366142 -7.51931,-1.509142 -1.62451,-1.143001 -1.97408,-6.597797 -3.96018,-6.56764 z"}
            fill={this.state.color}
            name={name}
            onClick={this.handleClick}
            draggable
        />)
    }
}

export default XmasTree;