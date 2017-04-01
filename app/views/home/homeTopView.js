/**
 * created at by zhao at 2017-3-17
 */
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addAnimationGrade,  onOpenHelpHandler } from './homeAction'

import navigate from '../../router/navigate'
import classNames from 'classnames'
import * as HomeConst from './homeConst'
import { utils } from '../../utils'


//导入css
import './homeTopView.scss'

class HomeTopView extends React.Component{

    //提高等级按钮事件
    onBnUpgradeHandler(){
        console.log("onBnUpgradeHandler")
    }

    //开启按钮事件
    onBnOpenHandler(){
        navigate.push('/openTip')
    }

    //关闭按钮事件
    onBnCloseHandler(){
        console.log("onBnCloseHandler")
    }

    render(){
        let { animationGrade, securityGrade, isOpen, addAnimationGrade, onOpenHelpHandler} = this.props
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
            <div className="home-top-div" style={{background: "radial-gradient("+utils.getSecurityBgColorByLevel(securityGrade)+")"}}>
                <div className="home-security-circle-div">
                    <div className={'home-security-circle ' + 'circle-s'+securityGrade}></div>
                    <div className="home-security-circle-bg"></div>
                </div>
                
                <div className="home-top-content">
                    { marks }
                    <div className="home-security-title">当前安全等级</div>
                    <div className="home-security-txt">S{ animationGrade }</div>
                    <button className={securityGrade >= HomeConst.MaxLevel ? "max-level btn-upgrade" : "btn-upgrade"} style={{color : utils.getSecurityFontColorByLevel(securityGrade)}} onTouchTap={this.onBnUpgradeHandler}>
                        {securityGrade >= HomeConst.MaxLevel ? "最高等级" : "提高等级"}
                    </button>
                    <div className="upgrade-tip">尊敬的金戈盾会员，安全等级为S7时，<br />账户发生风险，钱宝优先追偿哦！</div>
                </div>
                { 
                    //未开启
                    isOpen == 1 ? 
                    <button className="btnOpen" style={{"backgroundColor" : utils.getSecurityBtnColorByLevel(securityGrade)}} onTouchTap={this.onBnOpenHandler}>开通会员</button>
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
    
    addAnimationGrade: PropTypes.func.isRequired,
    onOpenHelpHandler : PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    securityGrade: state.userReducer.securityGrade,
    isOpen: state.userReducer.status,
    animationGrade: state.homeReducer.animationGrade,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addAnimationGrade, onOpenHelpHandler } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTopView)