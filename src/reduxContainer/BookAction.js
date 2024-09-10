import {buy_book} from './BookTypes'

const purchase_book =()=>{
    return{
        type : buy_book,
    }
}


export default purchase_book;


// // core concept of Redux

// Store-> Hold state of your application
// Action-> Describe the changes in the state of application
// Reducer-> Actually carries out the state transition depending on the action

// ex-> BOOKshop

// shop(store)<--------> shopkeeper(reducer)<------>CustomElementRegistry(action)





// // Action in Redux(it tell us that what should change)

// -> Actions are Javascript object that contains information
// -> Actions are the only source of information for the store. It only tells us what has happened.
// -> Actions have a type property and it should be defined in string constraint. 
// -> It is compulsory to include the type property in the object







// // Reducer in Redux(it tells us how should change)

// -> Reducers decides how the state of application changes depending upon the action sent to the store
// -> Reducers are the function that accepts state and action as parameter and returns the next state of the application
// -> (previousState,action) => newState 
//-> the state of our application is stored in an object tree within a single store
//        {
//             NumberofBooks:10
//        }
// 
// -> only way to change the state is to emit an action, an object describing what happened








// // Redux Store in Redux
// -> Entire Applicaton contains single store
// -> It is responsible for holding application state
// -> getState() method gives access to state it holds
// -> dispatch(action) method allow state to be updated
// -> it has shubscribe (listener) method as well by which we can register isteners. This method accept function(listener) as a parameter which execute anytime when the state in redux store changes.




//  // React Redux + Hooks
//  React Redux offers set of hooks to - subscribe to redux store and dispatch actions


// useSelector Hook
 //-> useSelector is a Hook react-redux library provides to get hold of any state that is maintained in the redux store
//   Syntax-> const xyz = useSelector(selector: Function, equalityFn?: Function)
// Selector functiin accepts the redux state as its argument and return a value

// useDispatch() Hook
// This  hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed
//  Syntax - const dispatch = useDispatch()