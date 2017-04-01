/**
 * created by zhao at 2017-3-20
 */
import { ActionTypes } from '../../constants'
import * as helpAction from '../../redux/common/helpAction'

const receiveData = data => ({
    type : ActionTypes.HOME_UPDATE,
    data : data
})

//获取首页用户数据
export const getHomeData = () => dispatch => {
    let url = "secIndex"
    dispatch(helpAction.fetchPosts("secIndex", url, {})).then((data)=>dispatch(receiveData(data)))
}

//首页动画
export const addAnimationGrade = () => dispatch => {
    dispatch({
        type : ActionTypes.UPDATE_ANIMATION_GRADE,
    })
}

//显示首页帮助视图
export const onOpenHelpHandler = () => dispatch => dispatch({type: ActionTypes.OPEN_HELP_VIEW})
//关闭首页帮助视图
export const onCloseHelpHandler = () => dispatch => dispatch({type: ActionTypes.CLOSE_HELP_VIEW})

// export const getHomeData = (cb_ok, cb_err)=>{
//     let url = "secIndex";
//     utils.sendMsg(url, function(data){
//         if(cb_ok) cb_ok(data);
//     }, cb_err)
// }