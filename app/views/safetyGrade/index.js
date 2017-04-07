/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../../components/page'
import Header from '../../components/header'
import './index.scss'
import { getSafetyGradeData } from './reducer/actions'

class SafeGrade extends React.Component {
    
    componentDidMount(){
        this.props.getSafetyGradeData();
    }

    onOpenHandler(){
    }
    
    render() {
        let {openStatus,content,safetyLevel} = this.props;
        return (
            <Page id="safety-grade-view">
                <Header title="安全等级" />
                <div className="safetyGrade-container container-height">
                    <div className={"safetyGrade-top-div "  +(openStatus==1? "close" : " open")}>
                        <div className="safetyGrade-bg"></div>
                        <div className="safetyGrade-title">安全等级为：{safetyLevel}
                            <br/>
                            {openStatus>1?"您已开启金戈盾，账户安全保障中":"开启金戈盾，全面保障您的账户安全"}
                        </div>
                    </div>
                    <span className="safetyGrade-list-title">您的扣分项为：</span>
                    <div className="safetyGrade-list">
                        {content!=undefined&&content.map((e, i) =><div className="safetyGrade-item" key={"id_" + i}>{e.name}</div> )}
                      
                    </div>
                </div>
            </Page>
        )
    }
}

SafeGrade.propTypes = {
    openStatus:PropTypes.number.isRequired,
    safetyLevel : PropTypes.number.isRequired,
    safetyTip : PropTypes.string.isRequired
}

let mapStateToProps = state => ({
    openStatus:state.userReducer.status,
    safetyLevel: state.userReducer.securityGrade,
    safetyTip: state.safetyGrade.safetyTip,
    content : state.safetyGrade.content,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getSafetyGradeData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SafeGrade)
// export default SafeGrade