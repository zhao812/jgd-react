/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getHomeData } from './reducer/actions'

import Page from '../../components/page'
import Header from '../../components/header'

import HomeTopView from './homeTopView'
import HomeMenuListView from './homeMenuListView'
import HomeHelpView from './homeHelpView'
import './index.scss'

class Home extends React.Component {
    
    componentDidMount(){
        let { getHomeData } = this.props
        getHomeData()
    }
    
    render() {
        let { helpIsShow, lbs, isOpen } = this.props
        let MenuListData = {
            lbs: lbs,
            isOpen: isOpen
        }
        return (
            <Page id="home-page">
                <Header title="首页"></Header>
                <div className="home-container">
                    <HomeTopView />
                    <HomeMenuListView data={MenuListData} />
                    { helpIsShow ? (<HomeHelpView />) : ""}
                </div>
            </Page>
        )
    }
}

Home.propTypes = {
    lbs : PropTypes.string.isRequired,
    helpIsShow : PropTypes.bool.isRequired,
    isOpen : PropTypes.number.isRequired,

    getHomeData : PropTypes.func,
}

let mapStateToProps = state => ({
    lbs: state.homeReducer.lbs,
    helpIsShow: state.homeReducer.helpIsShow,

    isOpen: state.userReducer.status,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getHomeData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)