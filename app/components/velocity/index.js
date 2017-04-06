'use strict'
import * as React from 'react';

// import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";

class Velocity extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            anBefore:{
                duration:60,
                animation:{
                    scaleX:0.8,
                    scaleY:0.8
                },
                visibility:"hidden",
            },
            anAfter:{
                duration:300,
                animation:{
                    scaleX:1,
                    scaleY:1
                },
                visibility:"visible"
            }
        }
    }

    render() {
        let { show } = this.props;
        let {anBefore, anAfter} = this.state;
        return (
            <div>
            {/*<VelocityComponent  {...(show===true?anAfter:anBefore)}>*/}
                { this.props.children }
            {/*</VelocityComponent>*/}
            </div>
        )
    }
};

Velocity.defaultProps = {
    show: false
}

module.exports = Velocity;