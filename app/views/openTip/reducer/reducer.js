/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'


const initialState = {
    packages: [],
    userClauseIsShow: false,
    bnDisabled: true,
    agreeStatus: false,
}

let resetState = (state) => {
    return {
        ...state,
        userClauseIsShow: false,
        bnDisabled: true,
        agreeStatus: false,
    }
}

let initPackage = (state, list) => {
    if(!list || list.length==0) return state
    return {
        ...state,
        packages: list
    }
}

let onShowUserClause = state => {
    if(!state.agreeStatus){
        return {
            ...state,
            userClauseIsShow: true
        }
    }else{
        return {
            ...state,
            agreeStatus: false,
            bnDisabled: true,
        }
    }

    return state
}

let onHideUserClause = state => {
    return {
        ...state,
        userClauseIsShow: false,
        agreeStatus: true,
        bnDisabled: false,
    }
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.RESET_OPEN_TIP:
            return resetState(state)
        case ActionTypes.INIT_OPENTIP:
            return initPackage(state, action.data)
        case ActionTypes.OPENTIP_SHOW_USER_CLAUSE:
            return onShowUserClause(state)
        case ActionTypes.OPENTIP_HIDE_USER_CLAUSE:
            return onHideUserClause(state)
        default:
            return state
    }
}