import fetch from 'isomorphic-fetch';

export const QUERY = 'QUERY';


const query = filter => dispatch => {
    fetch('../data/repairOrder.json?').then(
        result => dispatch({
            type: QUERY,
            result
        }),
        /* eror=>dispatch({})*/
    );
};
export default {
    query
}