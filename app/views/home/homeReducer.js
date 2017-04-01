/**
 * created by zhao at 2017-3-20
 */
import { ActionTypes, HomeConst } from '../../constants'


const initialState = {
    animationGrade : 1,
    lbs : "",
    helpIsShow: false
}

let initHomeDate = (state, data) => {
    if(!data) return state
    return {
        ...state,
        lbs : data.currentLbs || "",
        animationGrade : 1,
    }
}

let update_animation = state => {
    return {
        ...state,
        animationGrade : state.animationGrade + 1
    }
}

export default function update (state = initialState, action){
    switch(action.type){
        case ActionTypes.HOME_UPDATE:
            return initHomeDate(state, action.data)
        case ActionTypes.UPDATE_ANIMATION_GRADE:
            return update_animation(state)
        case ActionTypes.OPEN_HELP_VIEW:
            return { ...state, helpIsShow: true}
        case ActionTypes.CLOSE_HELP_VIEW:
            return { ...state, helpIsShow: false}
        default:
            return state
    }
}