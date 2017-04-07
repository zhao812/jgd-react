/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'

const OPEN_TIP = "您已开启金戈盾，账户安全保障中";
const CLOSE_TIP = "开启金戈盾，全面保障您的账户安全";
const receiveData = data => ({
    type : ActionTypes.SAFE_DATA,
    data : data
})
//获取首页用户数据
export const getSafetyGradeData = () => dispatch => {
    // let url = "gradeInfo"
    // dispatch(helpAction.fetchPosts("gradeInfo", url, {})).then(
    //     data=>{
    //         console.log(data)
    //     }
    // )

    dispatch({type: ActionTypes.SAFE_DATA})    
    let url = "gradeInfo"
    dispatch(helpAction.fetchPosts(url, url, {})).then((data)=>{
            dispatch(receiveData(data));
    })
}
