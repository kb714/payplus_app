export function initDashboard(data){
    return dispatch => {
        console.log("initDispatch", data);
        dispatch({type: "INIT_DASHBOARD", payload: data});
        return "DISPATCH";
    };
}