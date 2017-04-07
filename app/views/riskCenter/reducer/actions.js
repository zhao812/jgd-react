/**
 * created by zhao at 2017-3-28
 */
// import * as riskCenterApi from './api'
import * as ActionTypes from '../../main/reducer/ActionTypes'
import * as helpAction from '../../../redux/common/helpAction'


const receiveData = data => ({
    type : ActionTypes.RISK_CENTER_UPDATE,
    data : data
})

//获取首页用户数据
export const getRiskCenterData = () => dispatch => {
    let url = "rcOptionsSetting"
    dispatch(helpAction.fetchPosts(url, url, {})).then(data=>dispatch(receiveData(data)))
}

//checkbox 点击事件
export const switchRiskItem = (messageCode, checked) => dispatch => {
    dispatch({
        type: ActionTypes.SWITCH_RISK_CHECKBOX,
        data: {
            code: messageCode,
            checked: checked,
        }
    })
}

export const riskItemDataChange = (name, value) => dispatch => {
    dispatch({
        type: ActionTypes.RISK_SELECT_CHANGE,
        data: {
            name: name,
            value: value,
        }
    })
}


let getSaveData = data => (
    data.map(item=>{
        var result = {}
        result.alertCode = item.code
        result.status = item.status
        if(item.inputArr){
            result.inputArr = item.inputArr.map(obj=>({
                name: obj.name,
                value: obj.defaultVal
            }))
        }
        return result
    })
)
    
export const onSaveData = (dataList, smsCode) => {
    var param = {};
    param.data = JSON.stringify(getSaveData(dataList));
    param.smsCode = smsCode;
    let url = "rcRiskCenterSaveOrUpdate"
    return (dispatch, getState) => {
        return dispatch(helpAction.fetchPosts(url, url, param))
    }
}