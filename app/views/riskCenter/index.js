/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RiskMessageContainer from './riskMessageContainer'
import { Page, Header, TabItemArrow } from '../../components'
import './index.scss'
import { CommonConst } from '../../constants'

import { getRiskCenterData, onTabClickHandler } from './riskCenterAction'

class RiskCenter extends React.Component {

    componentDidMount(){
        let { getRiskCenterData } = this.props
        getRiskCenterData()
    }

    onSaveBtnHandler(){
    }

    render(){
        let { riskData, isOpen, onTabClickHandler } = this.props
        let riskMessageData = {
            isShow: riskData.riskMessageIsShow,
            risks: riskData.riskList,
            bnDisabled: riskData.bnConfirmDisabled
        }

        return(
            <Page id="user-center-view">
                <Header title="风险中心"></Header>
                <div className="risk-view-container">
                    <TabItemArrow title="风险短信提醒" direction={riskData.riskMessageIsShow ? CommonConst.ARROW_DIRECTION_UP : CommonConst.ARROW_DIRECTION_DOWN } onClickHandler={()=>this.onSaveBtnHandler()} />
                    <RiskMessageContainer {...riskMessageData} />
                </div>
            </Page>
        )
    }
}

RiskCenter.propTypes = {
    riskData: PropTypes.shape({
        mobile : PropTypes.string.isRequired,
        riskList : PropTypes.array.isRequired,
        riskMessageIsShow: PropTypes.bool.isRequired,
        bnConfirmDisabled: PropTypes.bool.isRequired,
    }).isRequired,
    isOpen: PropTypes.number.isRequired,

    getRiskCenterData : PropTypes.func,
    onTabClickHandler : PropTypes.func,
}

let mapStateToProps = state => ({
    riskData: state.riskCenterReducer,
    isOpen: state.homeReducer.isOpen,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getRiskCenterData, onTabClickHandler } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskCenter)