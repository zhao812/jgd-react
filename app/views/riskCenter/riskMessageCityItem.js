/**
 * created by zhao at 2017-3-24
 */

import React, { PropTypes } from 'react'


class RiskMessageCityItem extends React.Component {

    render(){
        let {data} = this.props
        return(
            <div className="risk-item-select-item risk-city-item">
                <div className="cityLabel">{data.defaultVal}</div>
                <div className="arrow-right-icon"></div>
            </div>
        )
    }
}

RiskMessageCityItem.PropTypes = {
    data: PropTypes.shape({
        defaultVal: PropTypes.string.isRequired
    }).isRequired
}

export default RiskMessageCityItem