import { combineReducers } from 'redux'
const initialState={
    obj : {
        name:"kaka",
        age : "28"
    },
    number:2
};
function update(state = initialState, action) {
    switch (action.type) {
        case 'INCREASE':
            console.log("INCREASE");
            console.log(state);
            return {
                number: state.number+action.payload,
                obj: state.obj
            };
        case 'DECREASE':
            console.log("DECREASE");
            console.log(state);
            return {
                number:state.number-action.payload,
                obj: state.obj
            };
        default:
            return state;
    }
}
export default combineReducers({
    count: update,
})