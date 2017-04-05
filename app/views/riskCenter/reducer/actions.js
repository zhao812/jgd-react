/**
 * created by zhao at 2017-3-28
 */
// import * as riskCenterApi from './api'
import * as ActionTypes from '../../main/reducer/ActionTypes'


const receiveData = data => ({
    type : ActionTypes.RISK_CENTER_UPDATE,
    data : data
})

//获取首页用户数据
export const getRiskCenterData = () => dispatch => {
    // riskCenterApi.getRiskCenterData(data => {
    //     dispatch(receiveData(data))
    // })
}

//风险短信提醒显示隐藏事件
export const onTabClickHandler = () => dispatch => {
    dispatch({
        type: ActionTypes.SWITCH_TAB_RISK_MESSAGE,
    })
}

//checkbox 点击事件
export const onSwitchHandler = (messageCode, checked) => dispatch => {
    dispatch({
        type: ActionTypes.SWITCH_RISK_CHECKBOX,
        data: {
            code: messageCode,
            checked: checked,
        }
    })
}

export const onSelectChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: ActionTypes.RISK_SELECT_CHANGE,
        data: {
            name: name,
            value: value,
        }
    })
}


let getSaveData = data => (
    data.map(item=>({
        alertCode: item.code,
        status: item.status,
        inputArr: item.inputArr.map(obj=>({
            name: obj.name,
            value: obj.defaultVal
        }))
    }))
)
    
export const onBnConfirmHandler = (data, smsCode) => dispatch => {
    // riskCenterApi.saveRiskCenterData(
    //     getSaveData(data),
    //     smsCode,
    //     () => {
    //         console.log("save ok")
    //         // dispatch(receiveData(data))
    //     },
    //     () => {
    //         console.log("save err")
    //         // dispatch(receiveData(data))
    //     }
    // )
    // dispatch({
    //     type: ActionTypes.SAVE_RISK_CENTER_MESSAGE
    // })
}

// export const getRiskCenterData = (cb_ok, cb_err)=>{
//     let url = "rcOptionsSetting";
//     utils.sendMsg(url, function(data){
//         if(cb_ok) cb_ok(data);
//     }, cb_err)
// }

// export const saveRiskCenterData = (data, smsCode, cb_ok, cb_err) => {
//     let url = "rcRiskCenterSaveOrUpdate";
//     let opt = {
//         data : JSON.stringify(data),
//         smsCode: smsCode
//     }
//     utils.sendMsg(url, function(data){
//         if(cb_ok) cb_ok(data);
//     }, cb_err, opt)
// }