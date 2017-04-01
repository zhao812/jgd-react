'use strict'
import * as React from 'react';

import WinMark from "./winMark.js";
import PopUp from "./popup";

import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";

class HelpPopUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            popUp:{},
            showModal:false
        }
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }
    hide(){
        this.setState({
            showModal:false,
            popUp:{},
        })

        let self = this;
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                    resolve();
            })
        })
    }
    show(content,options){

        console.log("container show", content, options)
        let self = this;
        
        return new Promise(function(resolve, reject){
            console.log("lllll")
            let popUp = Object.assign({}, options, {
                show: true,
                children:content,
                onMaskClose:()=>{
                    console.log("onMaskClose")
                    if(options&&options.maskClosable===true){
                        self.hide().then(function(){
                            resolve("Ok");
                        });
                        
                    };
                }
            })
            self.setState({
                showModal:true,
                popUp
            })
        });
    }
    render(){
        let {showModal,popUp} = this.state;
        let {anEnter,anLeave} = this.props;
        console.log(showModal)
        return (
            <div className="help">
                <WinMark show={showModal} onClick = {()=>popUp.onMaskClose()}/>
                <VelocityTransitionGroup enter={anEnter} leave={anLeave}>
                {showModal&&(<PopUp {...popUp}/>)}
                </VelocityTransitionGroup>
            </div>
        )
    }

}

HelpPopUp.defaultProps = {
    anEnter:{
        duration: 200,
        animation: "slideDown"
    },
    anLeave:{
        duration: 200,
        animation: "slideUp"
    }
}

module.exports = HelpPopUp;