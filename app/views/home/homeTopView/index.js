/**
 * created at by zhao at 2017-3-17
 */
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { addAnimationGrade,  onOpenHelpHandler } from '../reducer/actions'
import * as lev from '../../main/reducer/userConst'
import navigate  from '../../../router/navigate'
import classNames from 'classnames'
import * as HomeConst from '../reducer/const'


//导入css
import './index.scss'

class HomeTopView extends React.Component{

    //提高等级按钮事件
    onBnUpgradeHandler(){
        let {securityGrade} = this.props
        console.log(securityGrade,lev.MaxLevel)
        if(securityGrade <lev.MaxLevel){
            navigate.push('/safetyGrade')
        }
    }

    //开启按钮事件
    onBnOpenHandler(){
        browserHistory.push('/openTip')
    }

    //关闭按钮事件
    onBnCloseHandler(){
        console.log("onBnCloseHandler")
    }

    render(){
        let { animationGrade, securityGrade, isOpen, bgRadialGradient, fontColor, bnColor, addAnimationGrade, onOpenHelpHandler} = this.props
        let marks, index, list=[];
        for(index=1; index<=7; index++){
            list.push(index);
        }
        marks = list.map((value, index)=>{
            let classes = "s"+value + " " + (animationGrade == value ? 'selected' : '')
            return (<span className={classes} key={value} onTouchTap={onOpenHelpHandler}>{'S' + value}</span>)
        })

        //没有达到当前等级执行动画
        if(animationGrade < securityGrade){
            let animationTime = securityGrade > 1 ? 1000 / securityGrade : 0
            setTimeout(()=>addAnimationGrade(), animationTime)
        }

        return(
            <div className="home-top-div" style={{background: "radial-gradient("+bgRadialGradient+")"}}>
                <div className="home-security-circle-div">
                    <div className={'home-security-circle ' + 'circle-s'+securityGrade}></div>
                    <div className="home-security-circle-bg"></div>
                </div>
                
                <div className="home-top-content">
                    { marks }
                    <div className="home-security-title">当前安全等级</div>
                    <div className="home-security-txt">S{ animationGrade }</div>
                    <button className={securityGrade >= HomeConst.MaxLevel ? "max-level btn-upgrade" : "btn-upgrade"} style={{color : fontColor}} onTouchTap={()=>this.onBnUpgradeHandler()}>
                        {securityGrade >= HomeConst.MaxLevel ? "最高等级" : "提高等级"}
                    </button>
                    <div className="upgrade-tip">尊敬的金戈盾会员，安全等级为S7时，<br />账户发生风险，钱宝优先追偿哦！</div>
                </div>
                { 
                    //未开启
                    isOpen == 1 ? 
                    <button className="btnOpen" style={{"backgroundColor" : bnColor}} onTouchTap={this.onBnOpenHandler}>开通会员</button>
                    :
                    <button className="btnClose" onTouchTap={this.onBnCloseHandler}>关闭</button>
                }
            </div>
        ) 
    }
}

HomeTopView.PropTypes = {
    securityGrade: PropTypes.number.isRequired,
    animationGrade: PropTypes.number.isRequired,
    isOpen: PropTypes.number.isRequired,
    bgRadialGradient: PropTypes.string.isRequired,
    fontColor: PropTypes.string.isRequired,
    bnColor: PropTypes.string.isRequired,
    
    addAnimationGrade: PropTypes.func.isRequired,
    onOpenHelpHandler : PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    securityGrade: state.userReducer.securityGrade,
    isOpen: state.userReducer.status,
    animationGrade: state.homeReducer.animationGrade,
    bgRadialGradient: state.homeReducer.bgRadialGradient,
    fontColor: state.homeReducer.fontColor,
    bnColor: state.homeReducer.bnColor,
}) 

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addAnimationGrade, onOpenHelpHandler } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTopView)