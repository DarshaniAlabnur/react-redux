import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS} from "../actions/actionType";

const initialState = {
    data: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_LOADING:
            return{
                ...state,
                loading: true,
            };
        case FETCH_DATA_SUCCESS: 
            return{
                ...state,
                data: action.data,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;