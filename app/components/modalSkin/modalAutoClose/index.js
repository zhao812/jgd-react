'use strict'
import * as React from 'react';

import * as ModalConst from '../../modal/modalConst'
import * as helpAction from '../../../redux/common/helpAction'
import './index.scss'
import '../../../static/scss/common.scss'

class ModalAutoCloseSkin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: 1
        }
    }

    callBack(data){
        let { callBack } = this.props;
        callBack&&callBack(data);
    }

    componentDidMount(){
        this.setState({opacity: 1})

        setTimeout(()=>{
            this.setState({opacity: 0})
            setTimeout(()=>this.callBack(), 500)
        }, 1000)
    }

    render() {
        let {opacity} = this.state
        let {tip} = this.props
        return (
            <div className="alert-auto-close-skin popup-container" style={{opacity: opacity}}>
                <div className="alert-auto-close-container">
                    <div className="alert-msg">{tip}</div>
                </div>
            </div>
        )
    }
}

ModalAutoCloseSkin.defaultProps = {
    tip: "信息保存成功!",
    callBack: null,
}

module.exports = ModalAutoCloseSkin;