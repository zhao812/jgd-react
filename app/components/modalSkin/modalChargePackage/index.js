'use strict'
import * as React from 'react';

import Velocity from '../../velocity'
import * as ModalConst from '../../modal/modalConst'
import * as helpAction from '../../../redux/common/helpAction'
import './index.scss'
import '../common.scss'

class ModalChargePackageSkin extends React.Component {

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
    
    render() {
        let {show, packages} = this.props;
        console.log(packages)
        return (
            <Velocity show={show}>
                <div className="alert-charge-package-skin popup-container">
                    <div className="alert-common-container">
                        <div className="alert-title">支付会员费</div>
                        <div className="alert-content">
                            <div className="item">
                                <div className="title charge-package-title">支付方式：</div>
                                <div className="right charge-package-list">
                                    
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="item">
                                <div className="title">会员费：</div>
                                <div className="right money red"></div>
                                <div className="clear"></div>
                            </div>
                            <div className="item">
                                <div className="title">有效期：</div>
                                <div className="right date"></div>
                                <div className="clear"></div>
                            </div>
                            <div className="item">
                                <div className="title inputPasswordTitle">交易密码：</div>
                                <div className="right"><input className="inputPassword" type="password" placeholder="请输入密码" /></div>
                                <div className="clear"></div>
                            </div>
                            <div className="tip">支付成功后，后续每月将自动续费。请保持账户余额充足。如需停止服务，请于首页主动关闭。</div>
                            
                            <div className="alert-button-div">
                                <button className="alert-button-no" onTouchTap={()=>this.handCancel()}>取消</button>
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

ModalChargePackageSkin.defaultProps = {
    show:false,
    packages: []
}

module.exports = ModalChargePackageSkin;