/**
 * created by zhao at 2017-3-31
 */
import { ActionTypes } from '../../../../views/main'
import * as helpAction from '../../../../redux/common/helpAction'



let getUrlByCodeType = (codeType) =>{
    switch(codeType){
        case "trustedDevice":  return "verifyCode"
        case "deblocking": return "userDeblocking/getSmsKey"
        case "riskCenter": return "secSms/getSmsCode"
        default: return "verifyCode"
    }
}


export const getMessageCode = (type) => {
    let url = getUrlByCodeType(type)
    return (dispatch, getState) => {
        return dispatch(helpAction.fetchPosts(url, url, {}))
    }
}