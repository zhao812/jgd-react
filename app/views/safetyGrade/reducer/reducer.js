/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'

const initialState = {
    safetyTip: "",
    openStatus:"close",
    content:[]
}


export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.SAFE_DATA:
            return {
                ...state,
                content:""||action.data
            }
        default:
            return state
    }
}