/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RiskMessageContainer from './riskMessageContainer'
import Page from '../../components/page'
import Header from '../../components/header'
import TabItemArrow from '../../components/ui/tabItemArrow'

import './index.scss'
import * as CommonConst from '../main/reducer/CommonConst'

import { getRiskCenterData } from './reducer/actions'

class RiskCenter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    componentDidMount(){
        this.setState({
            isShow: true
        })
        let { getRiskCenterData } = this.props
        getRiskCenterData()
    }

    onRiskTabHandler(){
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render(){
        let { isShow } = this.state

        return(
            <Page id="user-center-view">
                <Header title="风险中心"></Header>
                <div className="risk-view-container">
                    <TabItemArrow title="风险短信提醒" direction={isShow ? CommonConst.ARROW_DIRECTION_UP : CommonConst.ARROW_DIRECTION_DOWN } onClickHandler={()=>this.onRiskTabHandler()} />
                    <RiskMessageContainer isShow={isShow} />
                </div>
            </Page>
        )
    }
}

RiskCenter.propTypes = {
   getRiskCenterData : PropTypes.func,
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getRiskCenterData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskCenter)