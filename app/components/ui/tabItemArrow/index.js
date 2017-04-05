/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'

import * as CommonConst from '../../../views/main/reducer/CommonConst'
import classNames from 'classnames'
import './index.scss'

class TabItemArrow extends React.Component {
    render(){
        let arrowClasses, { title, direction, onClickHandler } = this.props
        direction = direction ? direction : CommonConst.ARROW_DIRECTION_RIGHT
        arrowClasses = classNames('tab-arrow-icon', {
            'right': direction == CommonConst.ARROW_DIRECTION_RIGHT,
            'up': direction == CommonConst.ARROW_DIRECTION_UP,
            'down': direction == CommonConst.ARROW_DIRECTION_DOWN
        })

        return(
            <div className="tab-item-arrow" onTouchTap={onClickHandler} >
                <div className="title">{title}</div>
                <div className={arrowClasses}></div>
            </div>
        )
    }
}

TabItemArrow.PropTypes = {
    title: PropTypes.string.isRequired,
    direction: PropTypes.string,
    onClickHandler: PropTypes.func
}

export default TabItemArrow