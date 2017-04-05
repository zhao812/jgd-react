/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'

import CommonConst from '../../constants'
import classNames from 'classnames'
import './index.scss'


class MyFooterDateItem extends React.Component {

    render(){
        let recordItems, title
        return(
            <div class="my-footer-date-list">
                <div class="date-list-title-div">
                    <div class="title-icon"></div><span class="title-txt">{title}</span>
                </div>
                <div class="my-footer-item-list">{recordItems}</div>
            </div>
        )
    }
}

MyFooterDateItem.PropTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape().isRequired
}

export default MyFooterDateItem