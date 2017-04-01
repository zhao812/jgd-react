// 文件名称: page.js
//
// 创 建 人: zhao
// 创建日期: 2017/3/14
// 描    述: page

import React from 'react'

import './index.scss'

const Page = React.createClass({
    render(){
        return (
            <div className='ui-view-transitioning lt-ui-page' id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
});

export default Page;