
import {CLICKED_ON_CLASS} from '../actions/types'

const initialState = {
    key: 0
}


const reducer =(state = initialState, action) =>{   
    switch(action.type){
        default:
            return state;
        case CLICKED_ON_CLASS: {
            console.log("Clicked ");
            console.log(state.key);
            return {
                ...state,
                key: action.data ,
                
            }
            
        }
        
    }
    
}

export default reducer;