import {
    CARD_SAVE_REQUEST,
    CARD_SAVE_SUCCESS,
    CARD_SAVE_FAILURE
} from '../types';
import { apiCall } from '../../utils';

// async call uses thunk
export const saveCardData = (cardData) => (dispatch, getState) => {
    dispatch({ type: CARD_SAVE_REQUEST });
    return apiCall({
        url: `http://localhost:5000/save`,
        cardData
    })
        .then(response =>
            dispatch({
                type: CARD_SAVE_SUCCESS,
                payload: response,
            }),
        )
        .catch(e =>
            dispatch({
                type: CARD_SAVE_FAILURE,
                payload: e
            }),
        );
};