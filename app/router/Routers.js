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
			cb(null, require('../main').default)
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
		require('./myFooter').default,
		require('./riskCenter').default,
		require('./openTip').default
	]
}

export default Routers;
