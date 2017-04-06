/**
 * created by zhao at 2017-3-20
 */
import * as ActionTypes from '../../main/reducer/ActionTypes'


const initialState = {
    packages: [],
}

let initPackage = (state, list) => {
    if(!list || list.length==0) return state
    return {
        packages: list
    }
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.INIT_OPENTIP:
            return initPackage(state, action.data)
        default:
            return state
    }
}