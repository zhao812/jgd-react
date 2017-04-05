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
    dispatch({type: ActionTypes.RESET_OPEN_TIP})    
    let url = "pkgs"
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>dispatch(receiveData(data)))
}

/**已阅读 单选框改变  */
export const onChangeCheckBoxState = () => dispatch => {
    dispatch({
        type : ActionTypes.OPENTIP_CHANGE_AGREE,
    })
}

/**显示用户条款 */
export const onShowUserClause = () => dispatch => {
    dispatch({
        type : ActionTypes.OPENTIP_SHOW_USER_CLAUSE,
    })
}

/**关闭用户条款 */
export const onHideUserClause = () => dispatch => {
    dispatch({
        type : ActionTypes.OPENTIP_HIDE_USER_CLAUSE,
    })
}