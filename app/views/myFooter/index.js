/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import Header from '../../components/page'
import TabItemArrow from '../../components/ui/tabItemArrow'

import './index.scss'

class MyFooter extends React.Component {

    render(){
        let myFooterItems

        return(
            <Page id="my-footer-view">
                <Header title="我的足迹" />
                <div className="my-footer-container">
                    <TabItemArrow title='安全画像' onClick={()=>console.log("onClick")} />

                    <div className="my-footer-title"><span>最近登录</span><div className="btn-help-blue"></div></div>
                    <div className="my-footer-list">{myFooterItems}</div>
                </div>
            </Page>
        )
    }
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({  } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFooter)