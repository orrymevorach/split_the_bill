import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const Inputs = (props) => {
    
    return (
        <div>
            {/* If all of the inputs are false, show Restaurant Input and hide all the other inputs */}
            {props.restaurantComplete === false && props.totalComplete === false && props.splitComplete === false ? 
            
            <form action="#" onSubmit={(e) => props.onSubmitRestaurant(e)}>
                <div className="form-restaurant">
                    <label htmlFor="restaurant">What Restaurant Are You Eating At?</label>
                    <input
                        type="text"
                        id="restaurant"
                        name="restaurantInput"
                        value={props.restaurantInput}
                        onChange={(e) => props.onHandleChange(e)}
                    />
                    
                    {/* Submit button responds to onSubmitRestaurant */}
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            : null }
            
            {/* If the restaurant input is completed but all others have not yet been completed, show the totals Input and hide the other inputs */}
            {props.restaurantComplete === true && props.totalComplete === false && props.splitComplete === false ? 
            
            <form action="#" onSubmit={(e) => props.onSubmitTotal(e)}>
                <div className="form-total">
                    <label htmlFor="total">What Is The Total Of Your Bill?</label>
                    <input
                        type="number"
                        id="total"
                        step="0.01"
                        name="totalInput"
                        value={props.totalInput}
                        onChange={(e) => props.onHandleChange(e)}
                    />
                    
                    {/* Submit button responds to onSubmitTotal */}
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            : null}
            

            {/* If the restaurant and totals input have both been completed, but the split input has not, show the split input and hide the other inputs */}
            {props.restaurantComplete === true && props.totalComplete === true && props.splitComplete === false ? 
            
            <form action="#" onSubmit={(e) => props.onHandleSubmit(e)}>
                <div className="form-split">
                    <label htmlFor="split">How Many People Are Splitting The Bill?</label>
                    <input
                        type="number"
                        id="split"
                        name="splitInput"
                        value={props.splitInput}
                        onChange={(e) => props.onHandleChange(e)}
                    />
                    
                    {/* Submit button responds to onHandleSubmit */}
                    <input type="submit" value="Calculate" />
                </div>
            </form>
            : null }
        </div>
        

    )
}


export default Inputs;