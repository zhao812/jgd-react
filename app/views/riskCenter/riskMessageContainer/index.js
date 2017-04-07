/**
 * created by zhao at 2017-3-24
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RiskMessageItem from '../riskMessageItem'
import MessageCode from "../../../components/ui/messageCode"
import Modal from '../../../components/modal'
import * as ModalConst from '../../../components/modal/modalConst'

import * as RiskCenterConst from '../reducer/const'

import { onSaveData, switchRiskItem, riskItemDataChange } from '../reducer/actions'

import './index.scss'

class RiskMessageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bnDisabled: true,
            isShowMessageCode: false
        }
    }

    componentDidMount(){
        this.setState({
            bnDisabled: true,
            isShowMessageCode: false
        })
    }

    componentDidUpdate(){
        let { risks, isShow } = this.props
        if(risks.length > 0){
            let _h = this.refs.messageDiv.offsetHeight
            this.messageHeight = _h > 0 ? _h : this.messageHeight
            this.refs.messageDiv.style.height = isShow ? this.messageHeight + "px" : 0
        }
    }

    //风险条例开关按钮事件
    onSwitchHandler(code, checked){
        let { switchRiskItem } = this.props
        switchRiskItem(code, checked)
        this.setState({
            bnDisabled: false
        })
    }

    //风险条例值改变事件
    onSelectChangeHandler(name, value){
        let { riskItemDataChange } = this.props
        riskItemDataChange(name, value)

        this.setState({
            bnDisabled: false
        })
    }

    //确定按钮事件
    onConfirmHandler(){
        this.setState({
            isShowMessageCode: true
        })
    }

    onMessageCodeHandler(data){
        if(data.type){
            let { onSaveData, risks } = this.props
            onSaveData(risks, data.code)
            .then(result => {
                this.setState({ isShowMessageCode: false, bnDisabled: true })
                Modal.alert({tip:"保存成功！"}, ModalConst.MODAL_AUTO_CLOSE_SKIN)
            })
        }else{
            this.setState({ isShowMessageCode: false })
        }
    }

    render(){
        let { bnDisabled, isShowMessageCode } = this.state

        let riskItems, { risks, isOpen, mobile } = this.props
        riskItems = risks.map((data, index) =>
            <RiskMessageItem key={index} data={data} onSwitchHandler={this.onSwitchHandler.bind(this)} onSelectChangeHandler={this.onSelectChangeHandler.bind(this)} />
        )
        return(
            <div ref="messageDiv" className="risk-tab-div message-item-div">
                <div className="div-title" dangerouslySetInnerHTML={{__html:isOpen == 2 ? RiskCenterConst.riskMessageOpenTip : RiskCenterConst.riskMessageCloseTip}}></div>
                <div className="risk-div-list">
                    {riskItems}
                </div>
                <div className="btn-div">
                    <button className="btn-confirm" disabled={bnDisabled} onTouchTap={()=>this.onConfirmHandler()}>确认</button>
                </div>
                { isShowMessageCode ? <MessageCode mobile={mobile} codeType="riskCenter" onClickHandler={(data)=>this.onMessageCodeHandler(data)} /> : "" }
            </div>
        )
    }
}

RiskMessageContainer.PropTypes = {
    risks: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            labelSon: PropTypes.string.isRequired,
            status: PropTypes.number.isRequired,
            inputArr: PropTypes.arrayOf(
                PropTypes.shape({
                    defaultVal: PropTypes.string,
                    name: PropTypes.string,
                    unit: PropTypes.string,
                    value: PropTypes.string,
                })
            )
        })
    ).isRequired,
    mobile: PropTypes.string.isRequired,
    isOpen: PropTypes.number.isRequired,
    isShow: PropTypes.bool.isRequired,

    onSaveData: PropTypes.func.isRequired,
    switchRiskItem: PropTypes.func.isRequired,
    riskItemDataChange: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
    risks: state.riskCenterReducer.riskList,
    mobile: state.riskCenterReducer.mobile,
    isOpen: state.userReducer.status
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ onSaveData, switchRiskItem, riskItemDataChange } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskMessageContainer)