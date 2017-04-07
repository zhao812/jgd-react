/**
 * created by zhao
 * 2017/3/14
 */

import React from 'react'
import PageCSSTransition from '../../components/animate/PageCSSTransition'

import './index.scss'

const App = React.createClass({

    componentWillMount(){
    },

    componentWillUpdate(){
    },
    
    render(){
        return (
            <PageCSSTransition transitionName="cover">
                { React.cloneElement(this.props.children, { key: this.props.location.pathname }) }
            </PageCSSTransition>
        );
    }
})

export default App


export * as ActionTpyes from './reducer/ActionTypes'