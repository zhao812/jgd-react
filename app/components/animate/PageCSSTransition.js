// 文件名称: PageTransition.js
//
// 创 建 人: zhao
// 创建日期: 2017/3/14 17:16
// 描    述: PageTransition
import React from 'react';

import PageCSSTransitionChild from './PageCSSTransitionChild'
import ReactTransitionGroup from 'react/lib/ReactTransitionGroup';

const PageCSSTransition = React.createClass({
    
    propTypes: {
        transitionName: React.PropTypes.string.isRequired
    },

    _wrapChild(child){
        return (
            <PageCSSTransitionChild
                transitionName={this.props.transitionName}
                transitionEnterTimeout={this.props.transitionEnterTimeout}
                transitionLeaveTimeout={this.props.transitionLeaveTimeout}>
                {child}
            </PageCSSTransitionChild>
        );
    },

    render(){
        return (
            <ReactTransitionGroup {...this.props} childFactory={this._wrapChild} />
        );
    }
});

export default PageCSSTransition