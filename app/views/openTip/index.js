/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import Header from '../../components/header'
import UserClause from '../../components/ui/userClause'
import ChargePackage from '../../components/ui/chargePackage'

import Modal from '../../components/modal'
import * as ModalConst from '../../components/modal/modalConst'
import navigate from '../../router/navigate'


import { getPackages, payChargePackage } from './reducer/actions'
import classNames from 'classnames'

import './index.scss'

class OpenTip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bnDisabled: true,
            agreeStatus: false,
            userClauseIsShow: false,
            isShowChargePackage: false
        }
    }

    componentDidMount(){
        this.setState({
            bnDisabled: true,
            agreeStatus: false,
            userClauseIsShow: false,
            isShowChargePackage: false
        })

        this.props.getPackages();
    }

    //单选框点击事件
    onCheckBoxClickHandler(){
        let { agreeStatus } = this.state
        if(agreeStatus){
            this.setState({
                agreeStatus: false,
                bnDisabled: true,
            })
        }else{
            this.setState({
                userClauseIsShow: true,
            })
        }
    }

    onHideUserClauseHandler(){
        this.setState({
            agreeStatus: true,
            bnDisabled: false,
            userClauseIsShow: false
        })
    }

    //显示支付套餐界面
    onOpenHandler(){
        this.setState({
            isShowChargePackage: true
        })
    }

    onChargePackageHandler(data){
        if(data.type){
            let { payChargePackage } = this.props
            payChargePackage(data.data).then(data=>{
                if(data){
                    this.setState({
                        isShowChargePackage: false
                    })

                    Modal.alert({tip:"支付成功！恭喜您成为会员！"}, ModalConst.MODAL_SUCCESS_ALERT_SKIN).then(data=>{
                        navigate.goBack()
                    })
                }
            })
        }else{
            this.setState({
                isShowChargePackage: false
            })
        }
    }
    
    render() {
        let { bnDisabled, agreeStatus, userClauseIsShow, isShowChargePackage } = this.state

        let packageItems, checkBoxClass, 
        { packages } = this.props

        packageItems = packages.map((obj, index)=> <div key={index}><span className="red">{obj.name + "："}</span>{obj.desc}</div>)
        checkBoxClass = classNames({
            checkbox: true,
            selected: agreeStatus
        })

        return (
            <Page id="open-tip-view">
                <Header title="成为会员" />
                <div className="opent-tip-content">
                    <div className="open-tip-title">尊敬的女士/先生：</div>
                    <div className="open-tip-txt">
                        感谢您对金戈盾的支持！开启后您将获得的权益如下：<br />
                        1.风险提示短信费优惠（0.1元/条，非会员0.2元/条）<br />
                        2.优先追偿承诺，您的账号安全等级最高（当前为S7）时，发生资金损失，钱宝将优先追偿。<br />
                        3.我的安全中心，包括高级账户转账功能和其他会员服务。<br />
                        {/*3.可信设备查看<br />*/}
                        {/*4.风险短信提示<br />*/}
                        <br />
                        金戈盾服务费可选套餐如下（默认自动续费，短信提醒费不包含在内）：<br />
                        { packageItems }
                        随着金戈盾的安全防御措施日益完善，保障您安全的各项维度会不断增多，届时，金戈盾将继续引导您完善安全防御体系，也将根据您届时的安全措施完善程度计价，请悉知！<br />
                    </div>
                </div>
                <div className="clause-div" onTouchTap={()=>this.onCheckBoxClickHandler()}><div className={checkBoxClass}></div><div>我已阅读以上条款并遵守相关规定</div></div>
                <button className="btn-open" disabled={bnDisabled} onTouchTap={()=>this.onOpenHandler()}>开通会员</button>
                { userClauseIsShow ? <UserClause onCloseHandler={()=>this.onHideUserClauseHandler()} /> : "" }
                { isShowChargePackage ? <ChargePackage packages={packages} onClickHandler={(data)=>this.onChargePackageHandler(data)} /> : "" }
            </Page>
        )
    }
}

OpenTip.PropTypes = {
    packages: PropTypes.arrayOf(PropTypes.shape({
        pkgId: PropTypes.number.isRequired,
        amount: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    
    getPackages: PropTypes.func.isRequired,
    payChargePackage: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
    packages: state.openTipReducer.packages
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPackages, payChargePackage } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenTip)