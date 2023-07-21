import React from 'react';
import ReactDOM from 'react-dom';

let counter = 0;

const handleClick = () => {
  counter++;
  console.log("counter", counter);
  renderStateIndex();
}

const renderStateIndex = () => {
    const StateIndex = () => {
      return (
        <div>
          <button onClick={handleClick}>Click for Increment</button>
          <div>Counter view is {counter}</div>
        </div>
      );
    }
    
    ReactDOM.render(<StateIndex />, document.getElementById('root'));
}
renderStateIndex();
export default renderStateIndex;

// State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application.

//Mainly we follow two types of ways to create a component {Class-based and functional}


//<p>
//The counter is correctly getting updated as you can see in the console – but it's not getting updated on the UI.
//This is because we're directly updating the state inside the handleClick function as:
//this.state.counter = this.state.counter + 1
//So React does not re-render the component (and it's also a bad practice to directly update state).
//</p>

//TO make the state change react gives us a setState function which allows us to update the value of the state. {setState(updater, [callback])}

//**** Calling setState automatically re-renders the entire component and all its child components. We don't need to manually re-render */