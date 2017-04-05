/**
 * created by zhao at 2017-3-23
 */
import React , { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { onCloseHelpHandler } from '../reducer/actions'

import './index.scss'

class HomeHelpView extends React.Component{

    render(){
        let { onCloseHelpHandler } = this.props

        return(
            <div className="home-help-container popup-container">
                <div className="home-help-div">
                    <div className="home-help-content">
                        <p className="title">等级划分为：</p>
                        <p className="item"><span className="icon s1"></span>S1 - 正常注册</p>
                        <p className="item"><span className="icon s2"></span>S2 - 实名认证、银行卡已绑定</p>
                        <p className="item"><span className="icon s3"></span>S3 - 已设置交易密码</p>
                        <p className="item"><span className="icon s4"></span>S4 - 手机号码已绑定、邮箱已绑定</p>
                        <p className="item"><span className="icon s5"></span>S5 - 密保问题已设置</p>
                        <p className="item"><span className="icon s6"></span>S6 - 开启金戈盾</p>
                        <p className="item"><span className="icon s7"></span>S7 - 开启金戈盾后，无平台处理记录</p>
                        <p className="tip">以上每一等级包括前等级内容。更多安全保障措施，敬请期待！</p>
                    </div>
                </div>
                <button className="home-help-btn-close" onTouchTap={onCloseHelpHandler}></button>
            </div>
        )
    }
}

HomeHelpView.PropTypes = {
    onCloseHelpHandler: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ onCloseHelpHandler } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHelpView)