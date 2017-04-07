/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'


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
