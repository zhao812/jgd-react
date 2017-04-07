/**
 * Created by zhao 
 * 2017/3/14.
 */
import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

const App = cb => require.ensure([], require => { cb(null, require('../views/main').default)}, "App")
const Home = cb => require.ensure([], require => { cb(null, require('../views/home').default)}, "Home")
const MyFooter = cb => require.ensure([], require => { cb(null, require('../views/myFooter').default)}, "myFooter")
const OpenTip = cb => require.ensure([], require => { cb(null, require('../views/openTip').default)}, "openTip")
const RiskCenter = cb => require.ensure([], require => { cb(null, require('../views/riskCenter').default)}, "riskCenter")
const SafetyGrade = cb => require.ensure([], require => { cb(null, require('../views/safetyGrade').default)}, "safetyGrade")

const Routers = {
	path: '/',
	getComponent(nextState, cb){ App(cb) },
	indexRoute: {
		getComponent(nextState, cb){ Home(cb) }
	},
	childRoutes: [
		{
			path: 'myFooter',
			getComponent(nextState, cb){ MyFooter(cb) }
		},
		{
			path: 'openTip',
			getComponent(nextState, cb){ OpenTip(cb) }
		},
		{
			path: 'riskCenter',
			getComponent(nextState, cb){ RiskCenter(cb) }
		},
		{
			path: 'safetyGrade',
			getComponent(nextState, cb){ SafetyGrade(cb) }
		},
	]
}

export default Routers;