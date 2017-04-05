'use strict'
import * as React from 'react';

import * as ModalConst from '../../modal/modalConst'
import * as helpAction from '../../../redux/common/helpAction'
import Velocity from '../../velocity'
import './index.scss'
import '../common.scss'

class ModalMessageCodeSkin extends React.Component {

    constructor(props) {
        super(props);
    }

    handOk(){
        this.callBack(ModalConst.YES);
    }

    handCancel(){
        this.callBack(ModalConst.NO)
    }

    callBack(data){
        let { callBack } = this.props;
        callBack&&callBack(data);
    }

    getCode(codeType){
        let url = "verifyCode"
        if(codeType == "trustedDevice"){
            url = "verifyCode";
        }else if(codeType == "deblocking"){
            url = "userDeblocking/getSmsKey";
        }else if(codeType == "riskCenter"){
            url = "secSms/getSmsCode";
        }
    }
    
    render() {
        let {mobile, show, codeType} = this.props;

        return (
            <Velocity show={show} >
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
                                    <input className="code-input" type="text" placeholder="请输入验证码" /><button className="btn-send" onTouchTap={()=>this.getCode(codeType)}>获取验证码</button>
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
            </Velocity>
        )
    }
};

ModalMessageCodeSkin.defaultProps = {
    mobile:"",
    codeType:"",
    show:false,
}

module.exports = ModalMessageCodeSkin;