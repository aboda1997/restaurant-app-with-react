import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {        //  ...state return original  state  and not change the state means imutable 
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

/*let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'bakkz', y: 13 , x:5 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "bakkz", x: 5, y: 13 }""*/