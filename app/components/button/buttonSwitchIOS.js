/**
 * created by zhao at 2017-3-28
 */

import React, { PropTypes } from 'react'

import './buttonSwitchIOS.scss'

class ButtonSwitchIOS extends React.Component {

    render(){
        let { checked, onChangeHandler } = this.props
        return(
            <div className="ios-switch button">
                <input type="checkbox" className="bigswitch" defaultChecked={ checked } onChange={onChangeHandler} />
                <div><div></div><span className="on">ON</span><span className="off">OFF</span></div>
            </div>
        )
    }
}

ButtonSwitchIOS.PropTypes = {
    checked: PropTypes.bool.isRequired,
    onChangeHandler: PropTypes.func
}

export default ButtonSwitchIOS