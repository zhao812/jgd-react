/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from './ActionTypes'
import * as UserConst from './userConst'


const initialState = {
    securityGrade : 1,      //等级
    status : 1,             //1:未开启 2开启

    messageCode: ""         //短信验证码
}

let initUserData = (state, data) => {
    if(!data) return state
    return {
        ...state,
        securityGrade : data.securityGrade == UserConst.LimitLevel ? UserConst.MaxLevel : data.securityGrade,
        status : data.status, //1:未开启 2开启
    }
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.HOME_UPDATE:
            return initUserData(state, action.data)
        default:
            return state
    }
}