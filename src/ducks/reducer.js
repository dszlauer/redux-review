//
const INITIAL_STATE = {
    mysteryArray: [{
        img: 'https://i.pinimg.com/originals/ac/c3/c2/acc3c2d54cc3878f280eb5308e10d923.jpg'
    }],
    name: 'hunter'
}



//
const ADD_MYSTERY = 'ADD_MYSTERY';




//
export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case ADD_MYSTERY:
        const newArray = state.mysteryArray.slice()
        newArray.push(action.payload)
        return Object.assign({}, state, {mysteryArray: newArray})


        default:
        return state
    }
}






//
export function updateMystery(mystery){
    return {
        type: ADD_MYSTERY,
        payload: mystery
    }
}