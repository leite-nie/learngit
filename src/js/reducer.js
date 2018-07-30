import { combineReducers } from 'redux'
const initialState={
    obj : {
        name:"kaka",
        age : "28"
    },
    number:2
};
function update(state = initialState, action) {
    let _obj = state.obj;
    _obj.name = action.objName;
    switch (action.type) {
        case 'INCREASE':
            console.log("INCREASE");
            console.log(state);

            return {
                number: state.number+action.payload,
                obj: _obj
            };
        case 'DECREASE':
            console.log("DECREASE");
            console.log(state);
            return {
                number:state.number-action.payload,
                obj:_obj
            };
        default:
            return state;
    }
}
export default combineReducers({
    count: update,
})