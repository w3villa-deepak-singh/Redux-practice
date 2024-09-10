import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import purchaseBook from './BookAction';

function BookContainer(){
     const noOfBooks = useSelector((state) => state.NumberOfBooks); 
     console.log("::::::::::::",noOfBooks);
     
     const dispatch= useDispatch()
    return(
        <>
           <div>BookContainer</div>
           <h2> No of Books - {noOfBooks}</h2>
           <button onClick={() => dispatch(purchaseBook())}>Buy book</button> 
        </>
       
    )
}
 
export default BookContainer;