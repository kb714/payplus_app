export function initDashboard(data){
    return dispatch => {
        dispatch({type: "INIT_DASHBOARD", payload: data});
        return "DISPATCH";
    };
}