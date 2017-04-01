/**created by zhao at 2017-3-31 */

export default {
    path: 'openTip',

    getComponent(nextState, cb){
        require.ensure([], (require) => {
            cb(null, require('../views/openTip').default, 'openTip')
        })
    }
}