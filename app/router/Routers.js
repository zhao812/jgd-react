/**
 * Created by zhao 
 * 2017/3/14.
 */
import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

const Routers = {
	path: '/',
	getComponent(nextState, cb){
		require.ensure([], require => {
			cb(null, require('../views/main').default)
		}, "App")
	},
	indexRoute: {
		getComponent(nextState, cb){
			require.ensure([], (require) => {
				cb(null, require('../views/home').default)
			}, "Home")
		}
	},
	childRoutes: [
		{
			path: 'myFooter',
			getComponent(nextState, cb){
				require.ensure([], (require) => {
					cb(null, require('../views/myFooter').default, 'myFooter')
				})
			}
		},
		{
			path: 'openTip',
			getComponent(nextState, cb){
				require.ensure([], (require) => {
					cb(null, require('../views/openTip').default, 'openTip')
				})
			}
		},
		{
			path: 'riskCenter',
			getComponent(nextState, cb){
				require.ensure([], (require) => {
					cb(null, require('../views/riskCenter').default, 'riskCenter')
				})
			}
		},
	]
}

export default Routers;
