import React from 'react';

const Outputs = (props) => {
        return (
            <div>
                <div className="total-section">
                    <p className="output-left">Your Total Is:</p>
                    <p className="output-right total-amount">${props.totalOutput}</p>
                </div>
                <div className="split-section">
                    <p className="output-left">Split By:</p>
                    <p className="output-right">{props.splitOutput} People</p>
                </div>
                <div className="totals-section">
                    <p className="output-left total-pp-text">Total Per Person With:</p>
                    
                    <div className="no-tip">
                        <p className="output-left tip-percentage">No Tip</p>
                        <p className="output-right tip-amount">${props.noTip}</p>
                    </div>
                    <div className="fifteen-tip">
                        <p className="output-left tip-percentage">15% Tip</p>
                        <p className="output-right tip-amount">${props.fifteenTip}</p>
                    </div>
                    <div className="eighteen-tip">
                        <p className="output-left tip-percentage">18% Tip</p>
                        <p className="output-right tip-amount">${props.eighteenTip}</p>
                    </div>
                    <div className="twenty-tip">
                        <p className="output-left tip-percentage">20% Tip</p>
                        <p className="output-right tip-amount">${props.twentyTip}</p>
                    </div>
                    {props.customTipDisplay === true ?
                    <div className="custom-tip-display">
                        <p className="output-left tip-percentage">{props.customTipInput}% Tip</p>
                        <p className="output-right">${props.customTipOutput}</p>
                    </div>
                    : null}
                </div>
                <div className="custom-tip">
                    <form action="#" className="output-right custom-tip-form" onSubmit={(e) => props.onCustomTipSubmit(e)}>
                        <h3 className="output-left">Custom Tip</h3>
                        <input 
                            type="text"
                            name="customTipInput"
                            value={props.customTipInput}
                            onChange={(e) => props.onHandleChange(e)}
                            placeholder="%"
                        />
                        <input type="submit" value="Calculate"/>
                    </form>
                </div>
                
                {/* Reset Section */}
                <div className="reset-section">
                    <h3 className="reset-text output-left">Start again?</h3>
                    <button className="reset-button" onClick={() => props.reset()}>Reset</button>
                </div>
                
                <div className="comment-section">
                    <p>Don't Forget To Tip Your Servers! <img src="assets/smiley.png"/></p>
                </div>

            </div>
        )
    }

export default Outputs;