import React from 'react';
import Inputs from './inputs';
import Outputs from './outputs';
import Triangles from './triangles';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      address: '',
      restaurantInput: '',
      totalInput: '',
      splitInput: '',
      restaurantOutput: '',
      totalOutput: '',
      splitOutput: '',
      noTip: '',
      fifteenTip: '',
      eighteenTip: '',
      twentyTip: '',
      customTipInput: '',
      customTipOutput: '',
      restaurantComplete: false,
      totalComplete: false,
      splitComplete: false,
      customTipDisplay: false,
    }

    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.calculate = this.calculate.bind(this)
    this.reset = this.reset.bind(this)
    this.onCustomTipSubmit = this.onCustomTipSubmit.bind(this)
    this.onSubmitRestaurant = this.onSubmitRestaurant.bind(this)
    this.onSubmitTotal = this.onSubmitTotal.bind(this)
  }

  // Handles the change of all inputs except the restaurantInput
  onHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Handles the submit of the Calculate Custom Tip Button
  onCustomTipSubmit(e) {
    e.preventDefault();
    const splitNumber = this.state.splitInput;
    const totalNumber = this.state.totalInput;
    const evenSplit = totalNumber / splitNumber;
    const customTipInput = this.state.customTipInput;

    const customTip = ((evenSplit * customTipInput * 0.01) + evenSplit).toFixed(2)

    this.setState({
      customTipOutput: customTip,
      customTipDisplay: true
    })
  }

  // Handles the submit on the calculate button
  onHandleSubmit(e) {
    e.preventDefault();
    this.calculate();

    const restaurantName = this.state.restaurantInput;
    const splitNumber = this.state.splitInput;
    const totalNumber = this.state.totalInput;

    const date = new Date;
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    // re-routing the URL when the form is submitted
    this.props.history.push(`/${restaurantName}-${day}-${month}-${year}`)
    
    this.setState({
      restaurantOutput: restaurantName,
      splitOutput: splitNumber,
      totalOutput: totalNumber,
      splitComplete: true
    })
  }
  
  // When the calculate button is hit, calculate the amounts, including tip amounts
  // Function gets called onHandleSubmit of Calculate Button
  calculate() {
    const splitNumber = this.state.splitInput;
    const totalNumber = this.state.totalInput;
    const evenSplit = totalNumber / splitNumber;
    const evenSplitTwoDec = evenSplit.toFixed(2);

    const fifteenTip = ((evenSplit * 0.15) + evenSplit).toFixed(2)
    const eighteenTip = ((evenSplit * 0.18) + evenSplit).toFixed(2)
    const twentyTip = ((evenSplit * 0.20) + evenSplit).toFixed(2)

    this.setState({
      noTip: evenSplitTwoDec,
      fifteenTip: fifteenTip,
      eighteenTip: eighteenTip,
      twentyTip: twentyTip
    })
  }

  // When reset button is hit, resets the form back to empty
  reset() {
    // resetting the URL when reset is clicked
    this.props.history.push('/')
    
    this.setState({
      restaurantComplete: false,
      totalComplete: false,
      splitComplete: false,
      address: '',
      totalInput: '',
      splitInput: '',
      customTipInput: '',
      customTipDisplay: false
    })
  }

  // When submit total is clicked, restaurantComplete is true
  // Triggers the condition that if its true, it will not render
  onSubmitRestaurant(e) {
    e.preventDefault();
  
    this.setState({
      restaurantComplete: true,
    })
  }

  // When submit total is clicked, total Complete is true
  // Triggers the condition that if its true, it will not render
  onSubmitTotal() {
    this.setState({
      totalComplete: true
    })
  }

  render() {
    return (
      <div className="wrapper">
        
        {/* Heading */}
        {this.state.restaurantComplete === true && this.state.totalComplete === true && this.state.splitComplete === true ? 
        <h1>{this.state.restaurantInput}</h1>
        : <h1>Split The Bill</h1> }

        {/* If not all input forms have been completed, show the appropriate input. Otherwise, show none of the inputs */}
        {this.state.restaurantComplete === true && this.state.totalComplete === true && this.state.splitComplete === true ? null : 
        <Inputs
          // address={this.state.address}
          totalInput={this.state.totalInput}
          splitInput={this.state.splitInput}
          displayOutputs={this.state.displayOutputs}
          onHandleSubmit={this.onHandleSubmit}
          onHandleChange={this.onHandleChange}
          restaurantComplete={this.state.restaurantComplete}
          totalComplete={this.state.totalComplete}
          splitComplete={this.state.splitComplete}
          onSubmitRestaurant={this.onSubmitRestaurant}
          onSubmitTotal={this.onSubmitTotal}
          onSubmitSplit={this.onSubmitSplit}
          address={this.state.address}
          change={this.handleChange}
          select={this.handleSelect}
        />
        }
        
        {/* If all of the input forms have been completed, show the outputs. Otherwise, don't show the outputs */}
        {this.state.restaurantComplete === true && this.state.totalComplete === true && this.state.splitComplete === true ? 
          <Outputs
            restaurantOutput={this.state.restaurantOutput}
            splitOutput={this.state.splitOutput}
            totalOutput={this.state.totalOutput}
            noTip={this.state.noTip}
            fifteenTip={this.state.fifteenTip}
            eighteenTip={this.state.eighteenTip}
            twentyTip={this.state.twentyTip}
            onCustomTipSubmit={this.onCustomTipSubmit}
            onHandleChange={this.onHandleChange}
            customTipInput={this.state.customTipInput}
            customTipOutput={this.state.customTipOutput}
            reset={this.reset}
            customTipDisplay={this.state.customTipDisplay}
          />
          : null}

      <Triangles />

      </div>
      
    )
  }
}

export default Main;

