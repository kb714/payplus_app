const INITIAL_STATE = {message: 'sin modificar'};

export default function (state = INITIAL_STATE, action){
    switch(action.type) {
        case "INIT_DASHBOARD":
            return { state, message: action.payload };
            break;
    }
    return state;
}