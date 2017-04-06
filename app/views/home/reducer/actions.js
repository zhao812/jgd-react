/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'
import * as homeConst from './const'

const receiveData = data => ({
    type : ActionTypes.HOME_UPDATE,
    data : data
})


let setColorByLevel = level => {
    level = level || 1
    return homeConst.ColorLevel[level-1]
} 

//获取首页用户数据
export const getHomeData = () => dispatch => {
    let url = "secIndex"
    dispatch(helpAction.fetchPosts("secIndex", url, {})).then(
        data=>{
            var res = setColorByLevel(data.securityGrade)
            dispatch(receiveData({
                ...data,
                ...res
            }))
        }
    )
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