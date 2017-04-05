/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import Header from '../../components/header'
import UserClause from '../../components/ui/userClause'

import './index.scss'

import { getPackages, onShowUserClause, onHideUserClause } from './reducer/actions'
import classNames from 'classnames'

import * as ModalConst from '../../components/modal/modalConst'
import Modal from '../../components/modal'

class OpenTip extends React.Component {
    
    componentDidMount(){
        this.props.getPackages();
    }

    onOpenHandler(){
        let {packages} = this.props;
        Modal.alert({packages: packages}, ModalConst.MODAL_CHARGE_PACKAGE_SKIN).then(function(data){
            console.log(111, data)
        })
    }
    
    render() {
        let packageItems, checkBoxClass, 
        { bnDisabled, agreeStatus, packages, userClauseIsShow, onShowUserClause, onHideUserClause } = this.props

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
                <div className="clause-div" onTouchTap={onShowUserClause}><div className={checkBoxClass}></div><div>我已阅读以上条款并遵守相关规定</div></div>
                <button className="btn-open" disabled={bnDisabled} onTouchTap={this.onOpenHandler}>开通会员</button>
                { userClauseIsShow ? <UserClause onCloseHandler={onHideUserClause} /> : "" }
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
    bnDisabled: PropTypes.bool.isRequired,
    agreeStatus: PropTypes.bool.isRequired,
    userClauseIsShow: PropTypes.bool.isRequired,

    getPackages: PropTypes.func.isRequired,
    onShowUserClause: PropTypes.func.isRequired,
    onHideUserClause: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
    packages: state.openTipReducer.packages,
    bnDisabled: state.openTipReducer.bnDisabled,
    agreeStatus: state.openTipReducer.agreeStatus,
    userClauseIsShow: state.openTipReducer.userClauseIsShow,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPackages, onShowUserClause, onHideUserClause } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenTip)