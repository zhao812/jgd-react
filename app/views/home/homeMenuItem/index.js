/**
 * created by zhao at 2017-3-17
 */

import React, { PropTypes } from 'react'

import './index.scss'

class HomeMenuItem extends React.Component{

    render(){
        let { menuData, clickHandler, descRealStr, iconStatus } = this.props
        return(
            <div className={'home-menu-item ' + (iconStatus ? "" : " disable")} onTouchTap={clickHandler}>
                <div className={ 'icon ' + menuData.id }></div>
                <div className="item-name">{ menuData.name }</div>
                <div className="item-desc">{ menuData.desc.replace("&$&", descRealStr||'') }</div>
            </div>
        )
    }
}

HomeMenuItem.PropTypes = {
    descRealStr: PropTypes.string,
    menuData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        iconStatus: PropTypes.bool.isRequired
    }).isRequired,
    clickHandler : PropTypes.func.isRequired,
}

export default HomeMenuItem