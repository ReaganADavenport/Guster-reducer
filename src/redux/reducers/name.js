import { CHANGE_NAME } from "../actions/actionTypes";

const initalState = {
    name: "Guster"
};

const nameReducer = (state = initalState, action) =>{
    
    switch(action.type){
        case CHANGE_NAME: {
            const { name } = action.payload;
            return {
                ...state,
                name
            }
        }
        default:{
            return state;
        }
    }
}

export default nameReducer;