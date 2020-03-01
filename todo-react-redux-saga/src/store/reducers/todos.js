import { uuid } from 'uuidv4';
import * as actionTypes from '../actions/actionTypes';

const initialState = [
    { id: uuid(), title: 'test 1', complete: false },
    { id: uuid(), title: 'test 2', complete: false },
];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_API_DATA:
            return [...state.concat(action.data)];
        case actionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: uuid(),
                    title: action.title,
                    complete: false,
                },
            ];
        case actionTypes.DELETE_TODO:
            return state.filter(item => item.id !== action.id);
        case actionTypes.TOGGLE_TODO:
            const newstate = state.map(todo => {
                if (action.todo === todo) {
                    return {
                        ...todo,
                        complete: !todo.complete,
                    };
                }
                return todo;
            });
            return newstate;
        default:
            return state;
    }
};

export default todos;
