import React from 'react'
import PropTypes from 'prop-types';

const Count = (props) => {
  return (
    <div>
        <h1>
            My Name is {props.name} of &nbsp; {props.age}.
        </h1>      
        <p>
            I am a front end developer.
        </p>
    </div>
  );
};
Count.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default Count
