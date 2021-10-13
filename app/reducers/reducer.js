
import {CLICKED_ON_CLASS} from '../actions/types'

const initialState = {
    classID: 0
}


const reducer =(state = initialState, action) =>{   
    switch(action.type){
        default:
            return state;
        case CLICKED_ON_CLASS: {
            return {
                ...state,
                classID:action.data,
                
            }
            
        }
        
    }
    
}

export default reducer;