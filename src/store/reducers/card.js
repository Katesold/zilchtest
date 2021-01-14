import {
    CARD_LOAD_REQUEST,
    CARD_LOAD_SUCCESS,
    CARD_LOAD_FAILURE,
    CARD_SAVE_REQUEST,
    CARD_SAVE_SUCCESS,
    CARD_SAVE_FAILURE
} from '../types';

const getInitialState = () => ({
    card: []
});

export const card = (state = getInitialState(), action) => {
    switch (action.type) {
        case CARD_LOAD_REQUEST:
            return {
                ...state,
                products: {...action.payload}
            }
        default:
            return state;
    }
}

//IF STATE NEEDED ON LOAD
// const getInitialState = () => ({
//     list: createPreLoadedWidgets()
// });

// export const widgets = (state = getInitialState(), action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }