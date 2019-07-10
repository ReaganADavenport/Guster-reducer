import { ACTION_EAT, ACTION_NAP, ACTION_PLAY, ACTION_BLEP } from "../actions/actionTypes";

const initalState = {
    activity: "napping"
};

const activityReducer = ( state = initalState, action) =>{
    switch(action.type){
        case ACTION_EAT:{
            return {
                ...state,
                activity: "eating",
            };
        }
        case ACTION_NAP:{
            return {
                ...state,
                activity: "naping",
            };
        }
        case ACTION_PLAY:{
            return {
                ...state,
                activity: "playing",
            };
        }
        case ACTION_BLEP:{
            return {
                ...state,
                activity: "bleping",
            };
        }
        default:{
            return state;
        }
    }
}

export default activityReducer;