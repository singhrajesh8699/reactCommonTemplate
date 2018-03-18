import * as types from '../constants/actionTypes';

export function getHomePageData(data) {
    console.log('action',data)
    return function (dispatch) {
        return dispatch({
            type: types.Home_Page_Data,
            data: data
        });
    };
}