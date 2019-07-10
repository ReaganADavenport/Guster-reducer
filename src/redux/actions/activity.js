import { ACTION_NAP, ACTION_EAT, ACTION_PLAY, ACTION_BLEP, CHANGE_NAME } from "./actionTypes";

export const eat = () => {
    return{
        type: ACTION_EAT
    };
};

export const nap = () => {
    return {
        type: ACTION_NAP
    };
};

export const play = () => {
    return{
        type: ACTION_PLAY
    };
};

export const blep = () => {
    return{
        type: ACTION_BLEP
    };
};

export const changeName = name => ({
    type: CHANGE_NAME,
    payload: {
        name
    }
});