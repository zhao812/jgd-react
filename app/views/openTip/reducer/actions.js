/**
 * created by zhao at 2017-3-31
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'

const receiveData = data => ({
    type : ActionTypes.INIT_OPENTIP,
    data : data
})

/**获取套餐数据 */
export const getPackages = () => dispatch => {
    let url = "pkgs"
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>dispatch(receiveData(data)))
}

export const payChargePackage = (param) => {
    param.pwd = helpAction.encodePassword(param.pwd)
    let url = "pay"
    return (dispatch, getState) => {
        return dispatch(helpAction.fetchPosts(url, url, param))
    }
}