import React from 'react';
import Count from './Count';

const  About = (props) => {
  return (
    <div>
       {/* Props are the read-only properties that are shared between components to give the unidirectional flow of React a dynamic 
       touch. They're mainly shared from the parent component to the child component, but the reverse is also possible (though not recommended).          */}
        <div className="cont">
          <Count name="Akshat" age={22} />            
        </div>
    </div>
  )
};

export default About;
