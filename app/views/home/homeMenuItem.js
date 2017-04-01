/**
 * created by zhao at 2017-3-17
 */

import React, { PropTypes } from 'react'

import './homeMenuItem.scss'

class HomeMenuItem extends React.Component{

    render(){
        let { menuData, clickHandler, descRealStr } = this.props
        return(
            <div className="home-menu-item" onTouchTap={()=>clickHandler(menuData.link)}>
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
        desc: PropTypes.string.isRequired
    }).isRequired,
    clickHandler : PropTypes.func.isRequired,
}

export default HomeMenuItem