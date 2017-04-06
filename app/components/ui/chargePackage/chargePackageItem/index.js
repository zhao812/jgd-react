/**
 * created by zhao at 2017/4/6
 */

import React, { PropTypes } from 'react'

class ChargePackageItem extends React.Component {
    render(){
        let { selected, data, onClickHandler } = this.props
        return(
            <div className={"charge-package-item " + (selected ? "selected" : "")} onTouchTap={onClickHandler}>
                <div className="icon"></div><div className="desc">{data.name}</div>
            </div>
        )
    }
}

ChargePackageItem.PropTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    selected: PropTypes.bool.isRequired,

    onClickHandler: PropTypes.func
}

export default ChargePackageItem