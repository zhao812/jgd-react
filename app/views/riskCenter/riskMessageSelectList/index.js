/**
 * created by zhao at 2017-3-24
 */

import React, { PropTypes } from 'react'

import './index.scss'

class RiskMessageSelectList extends React.Component {

    render(){
        let {title, children} = this.props

        return(
            <div>
                <div className="risk-item-line"></div>
                <div className="risk-item-div">
                    <div className="risk-item-subTitle-div"><span>{title}</span></div>
                    <div className="risk-item-selected-div">{children}</div>
                </div>
            </div>
        )
    }
}

RiskMessageSelectList.PropTypes = {
    title: PropTypes.string.isRequired
}

export default RiskMessageSelectList