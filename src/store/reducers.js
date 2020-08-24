import { SET_CURRENT } from "./actionTypes";

const initialState = {
    currentItem: {}
}

const movieSeries = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT:
            return {
                ...state,
                currentItem: action.payload,
                
            }
        default:
            return state
    }
}

export default movieSeries