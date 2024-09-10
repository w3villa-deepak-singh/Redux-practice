
import { buy_book } from "./BookTypes";

// Initial state of the application
const initialState = {
    NumberOfBooks: 20,
};

// // define reducer(it is function)
const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_book:
            return {
                ...state, 
                NumberOfBooks: state.NumberOfBooks - 1,
            };
        default:
            return state;
    }
};

export default BookReducer;
