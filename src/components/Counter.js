import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1});
  }

  render() {
    let counterColor = '';

    if (this.state.counter > 0 && this.state.counter <= 5) {
      counterColor = 'lightGreen';
    } else if (this.state.counter > 5 && this.state.counter <= 10) {
      counterColor = 'medLightGreen';
    } else if (this.state.counter > 10 && this.state.counter <= 15) {
      counterColor = 'medDarkGreen';
    } else if (this.state.counter > 15) {
      counterColor = 'darkGreen';
    } else if (this.state.counter < 0 && this.state.counter >= -5) {
      counterColor = 'lightRed';
    } else if (this.state.counter < -5 && this.state.counter >= -10) {
      counterColor = 'medLightRed';
    } else if (this.state.counter < -10 && this.state.counter >= -15) {
      counterColor = 'medDarkRed';
    } else if (this.state.counter < -15) {
      counterColor = 'darkRed';
    } else if(document.getElementById('counter')){
      counterColor = '';
    }
   


    return (
      <div>
        <h4 id="counter" className={counterColor}>{this.state.counter}</h4>
        <button id="increment" onClick={this.incrementClick}>Increment</button>
        <button id="decrement" onClick={this.decrementClick}>Decrement</button>
      </div>
    );
  }
}

export default Counter;