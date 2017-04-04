/**
 * created by zhao at 2017-3-31
 */
import { ActionTypes } from '../../constants'
import * as helpAction from '../../redux/common/helpAction'

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


export const onChangeCheckBoxState = () => dispatch => {
    dispatch({
        type : ActionTypes.OPENTIP_CHANGE_AGREE,
    })
}

export const onShowUserClause = () => dispatch => {
    dispatch({
        type : ActionTypes.OPENTIP_SHOW_USER_CLAUSE,
    })
}

export const onHideUserClause = () => dispatch => {
    dispatch({
        type : ActionTypes.OPENTIP_HIDE_USER_CLAUSE,
    })
}