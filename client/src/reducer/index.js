const initialState = {
    characters: [],
    films: [],
    planets: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_CHARACTERS':
            return{
                ...state,
                characters: action.payload.data,
            };
        case 'GET_FILMS':
            return{
                ...state,
                films: action.payload.data
            };
        case 'GET_PLANETS':
            return{
                ...state,
                planets: action.payload.data
            }
        default:
            return state;
    }
}

export default rootReducer;