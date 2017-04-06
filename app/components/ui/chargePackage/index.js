'use strict'
import React, { PropTypes } from 'react'

import ChargePackageItem from './chargePackageItem'

import './index.scss'
import '../../../static/scss/common.scss'

class ModalChargePackageSkin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectPkgData: null
        }
    }

    componentDidMount(){
        let selectPkgData, { packages } = this.props
        if(packages.length>0) selectPkgData = packages[0]
            
        this.setState({
            selectPkgData: selectPkgData
        })
    }

    handOk(){
        let val = this.refs.inputPassword.value;
        if(val == "") return
        let { onClickHandler } = this.props
        let { selectPkgData } = this.state
        if(selectPkgData){
            let data = {
                pwd: val,
                pkgId: selectPkgData.pkgId
            }
            onClickHandler && onClickHandler({type: true, data: data})
        }
    }

    handCancel(){
        let { onClickHandler } = this.props
        onClickHandler && onClickHandler({type: false})
    }

    onItemClickHandler(pkgObj){
        this.setState({
            selectPkgData: pkgObj
        })
    }
    
    render() {
        let { selectPkgData } = this.state
        let packageItems, {packages} = this.props;
        packageItems = packages.map((obj, index) => {
            if(!selectPkgData) selectPkgData = obj
            return (
                <ChargePackageItem key={index} data={obj} selected={selectPkgData.pkgId==obj.pkgId ? true : false} onClickHandler={()=>this.onItemClickHandler(obj)} />
            )
        })

        let amount = selectPkgData ? selectPkgData.amount : "",
            endDate = selectPkgData ? selectPkgData.endDate : ""

        return (
            <div className="alert-charge-package-skin popup-container">
                <div className="alert-common-container">
                    <div className="alert-title">支付会员费</div>
                    <div className="alert-content">
                        <div className="item">
                            <div className="title charge-package-title">支付方式：</div>
                            <div className="right charge-package-list">{ packageItems }</div>
                            <div className="clear"></div>
                        </div>
                        <div className="item">
                            <div className="title">会员费：</div>
                            <div className="right money red">{amount}</div>
                            <div className="clear"></div>
                        </div>
                        <div className="item">
                            <div className="title">有效期：</div>
                            <div className="right date">{endDate}</div>
                            <div className="clear"></div>
                        </div>
                        <div className="item">
                            <div className="title inputPasswordTitle">交易密码：</div>
                            <div className="right"><input ref="inputPassword" className="inputPassword" type="password" placeholder="请输入密码" /></div>
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
        )
    }
}

ModalChargePackageSkin.PropTypes = {
    packages: PropTypes.arrayOf(
        PropTypes.shape({
            pkgId: PropTypes.number.isRequired,
            amount: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
        })
    ).isRequired,

    onClickHandler: PropTypes.func,
}

export default ModalChargePackageSkin