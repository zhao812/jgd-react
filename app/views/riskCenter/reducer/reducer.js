/**
 * created by zhao at 2017-3-28
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'

const initialState = {
    mobile: "",
    riskList: [],
    riskMessageIsShow: true,    //风险短信提醒是否显示
    bnConfirmDisabled: true,   //保存按钮状态
}

let initData = (state, data) => ({
    ...state,
    mobile: data.mobile,
    riskList: data.riskList
})

let switchTabRiskMessageState = state => ({
    ...state,
    riskMessageIsShow: !state.riskMessageIsShow
})

let switchRiskMessageCheckbox = (state, data) => {
    let list = state.riskList.map(obj => {
        if(obj.code == data.code) return {
            ...obj,
            status: data.checked ? 1 : 2
        }
        return obj
    })

    return {
        ...state,
        riskList: list,
        bnConfirmDisabled: false,
    }
}

let riskMessageSelectChange = (state, data) => {
    let list = state.riskList.map(obj => {
        let arr = obj.inputArr || [], temp
        temp = arr.map(item=>{
            if(item.name == data.name) return {
                ...item,
                defaultVal: data.value
            }
            return item
        })
        return {
            ...obj,
            inputArr: temp
        }
    })

    return {
        ...state,
        riskList: list,
        bnConfirmDisabled: false,
    }
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.RISK_CENTER_UPDATE:
            return initData(state, action.data)

        case ActionTypes.SWITCH_TAB_RISK_MESSAGE:
            return switchTabRiskMessageState(state)

        case ActionTypes.SWITCH_RISK_CHECKBOX:
            return switchRiskMessageCheckbox(state, action.data)

        case ActionTypes.RISK_SELECT_CHANGE:
            return riskMessageSelectChange(state, action.data)
        default:
            return state
    }
}