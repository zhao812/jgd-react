/**
 * created by zhao at 2017-3-24
 */

import React, { PropTypes } from 'react'

import './index.scss'

class RiskMessageSelectItem extends React.Component {

    render(){
        let opts, { itemWidth, data, status, onChangeHandler } = this.props
        opts = data.value.split(",").map((val, index) => <option key={index} value={val}>{val + (data.unit || "")}</option>)
        
        return(
            <div className="risk-item-select-item" style={{width: itemWidth}}>
                <select dir="rtl" disabled={status == 1 ? "" : "disabled"} defaultValue={data.defaultVal} onChange={(e)=>onChangeHandler(data.name, e.target.value)}>{ opts }</select>
            </div>
        )
    }
}

RiskMessageSelectItem.PropTypes = {
    data: PropTypes.shape({
        defaultVal: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        unit: PropTypes.string,
        value: PropTypes.string.isRequired,
    }).isRequired,

    itemWidth: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    onChangeHandler: PropTypes.func.isRequired
}

export default RiskMessageSelectItem