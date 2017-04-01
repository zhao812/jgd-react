/**created by zhao at 2017-3-31 */

export default {
    path: 'myFooter',

    getComponent(nextState, cb){
        require.ensure([], (require) => {
            cb(null, require('../views/myFooter').default, 'myFooter')
        })
    }
}