/**
 * created by zhao at 2017-3-24
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RiskMessageItem from './riskMessageItem'
import * as RiskCenterConst from './reducer/const'

import { onBnConfirmHandler } from './reducer/actions'

import './riskMessageContainer.scss'

class RiskMessageContainer extends React.Component {
    componentDidMount(){
        this.fristUpdate = true;
        this.messageHeight = 0;
    }

    componentDidUpdate(){
        if(this.fristUpdate){
            this.messageHeight = this.refs.messageDiv.offsetHeight
            this.refs.messageDiv.style.height = this.messageHeight+"px"
            this.fristUpdate = false
        }
    }

    render(){
        let divStyle, riskItems, { risks, isOpen, isShow, bnDisabled, onBnConfirmHandler } = this.props
        riskItems = risks.map((data, index) => (<RiskMessageItem key={index} data={data} />))
        divStyle = this.messageHeight ? {height: isShow ? this.messageHeight : 0 } : {}
        return(
            <div ref="messageDiv" className="risk-tab-div message-item-div" style={divStyle}>
                <div className="div-title" dangerouslySetInnerHTML={{__html:isOpen == 2 ? RiskCenterConst.riskMessageOpenTip : RiskCenterConst.riskMessageCloseTip}}></div>
                <div className="risk-div-list">
                    {riskItems}
                </div>
                <div className="btn-div">
                    <button className="btn-confirm" disabled={bnDisabled} onTouchTap={()=>onBnConfirmHandler(risks)}>确认</button>
                </div>
            </div>
        )
    }
}

RiskMessageContainer.PropTypes = {
    risks: PropTypes.array.isRequired,
    isOpen: PropTypes.number.isRequired,
    isShow: PropTypes.bool.isRequired,
    bnDisabled: PropTypes.bool.isRequired,

    onBnConfirmHandler: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ onBnConfirmHandler } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskMessageContainer)