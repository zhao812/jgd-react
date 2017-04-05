// 文件名称: DevTools.js
//
// 创 建 人: zhao
// 创建日期: 2017/3/14
// 描    述: redux开发工具
import React from 'react'

//从redux-devtools中引入createDevTools
import {createDevTools} from 'redux-devtools'
//显示包是单独的，要额外指定
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

module.exports = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-g'
                 changePositionKey='ctrl-q'
                 defaultIsVisible={false}>
        <LogMonitor/>
    </DockMonitor>
);