'use strict'
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getMessageCode } from './reducer/actions'

import './index.scss'
import '../../../static/scss/common.scss'

class MessageCode extends React.Component {

    constructor(props) {
        super(props);

        this.MaxTime = 60
        this.timer = null
        this.state = {
            countTime: 0
        }
    }

    handOk(){
        let val = this.refs.codeInput.value;
        if(val == "") return

        let { onClickHandler } = this.props
        onClickHandler && onClickHandler({type: true, code: val})
    }

    handCancel(){
        let { onClickHandler } = this.props
        onClickHandler && onClickHandler({type:false})
    }

    onSendHandler(){
        let { getMessageCode, codeType } = this.props
        getMessageCode(codeType).then(data => this.setState({ countTime:  this.MaxTime}))
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
        this.timer = null
    }

    render() {
        let { countTime } = this.state
        let {mobile} = this.props;

        let bnSendStr = "获取验证码", bnDisabled = false
        if(countTime>0){
            bnSendStr = countTime + "s"
            bnDisabled = true
            this.timer = setTimeout(()=>this.setState({countTime:countTime-1}), 1000)
        }else{
            this.timer = null
        }

        return (
            <div className="alert-message-code-skin popup-container">
                <div className="alert-common-container">
                    <div className="alert-header">
                        <div className="alert-title">获取短信验证码</div>
                    </div>
                    <div className="alert-content">
                        <div className="alert-msg">
                            <div className="phone-div">
                                已使用号码<span className="phone-txt">{mobile}</span>进行手机验证，请点击获取短信验证码。
                            </div>
                            <div className="code-div">
                                <input ref="codeInput" className="code-input" type="text" placeholder="请输入验证码" />
                                <button className="btn-send" disabled={bnDisabled} onTouchTap={()=>this.onSendHandler()}>{bnSendStr}</button>
                                <div className="clear"></div>
                            </div>
                        </div>

                        <div className="alert-button-div">
                            <button className="alert-button-close" onTouchTap={()=>this.handCancel()}>取消</button>
                            <button className="alert-button-yes" onTouchTap={()=>this.handOk()}>确定</button>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

MessageCode.PropTypes = {
    mobile: PropTypes.number.isRequired,
    codeType: PropTypes.string,
    
    onClickHandler: PropTypes.func,
    getMessageCode: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getMessageCode } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageCode)