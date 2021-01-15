import {
    CARD_SAVE_REQUEST,
    CARD_SAVE_SUCCESS,
    CARD_SAVE_FAILURE
} from '../types';

const getInitialState = () => ({
    cardSaved: false
});

export const card = (state = getInitialState(), action) => {
    switch (action.type) {
        case CARD_SAVE_REQUEST:
            return {
                ...state,
            }
        case CARD_SAVE_SUCCESS:
            return {
                ...state,
                cardSaved: true             
            }
        case CARD_SAVE_FAILURE:
                return state;
        default:
            return state;
    }
}