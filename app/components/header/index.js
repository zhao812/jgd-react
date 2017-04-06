/**
 * created by zhao at 2017-3-16
 */

import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'

import navigate from '../../router/navigate'

//导入css
import './index.scss'

class Header extends React.Component{

    render(){
        let { title, onBackClick } = this.props

        return(
            <header className="app-header">
                <div>
                    <span>{ title }</span>
                    <button onClick={ () => { onBackClick ? onBackClick() : navigate.goBack() }}></button>
                </div>
            </header>
        ) 
    }
}

Header.PropTypes = {
    title : PropTypes.string.isRequired,
    onBackClick : PropTypes.func
}

export default Header