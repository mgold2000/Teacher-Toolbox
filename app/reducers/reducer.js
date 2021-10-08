
import {CLICKED_ON_CLASS} from '../actions/types'

const initialState = {
    key: ''
}

const reducer =(state = initialState, action) =>{
    console.log(action.data)
    switch(action.type){
        default:
            return state;
        case CLICKED_ON_CLASS:
            return {
                ...state,
                key: action.data,
                
            }
    }
    
}

export default reducer;