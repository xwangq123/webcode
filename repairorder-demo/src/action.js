export const QUERY = 'QUERY';
export const ERROR = 'ERROR';

const query = filter => dispatch => {
    const fetch = require('isomorphic-fetch');
    fetch('../data/repairOrder.json?')
        .then(r => r.json())
        .then(result => dispatch({
                type: QUERY,
                result
            }),
            error => dispatch({
                type: ERROR,
                error
            })
        );
};
export default {
    query
}