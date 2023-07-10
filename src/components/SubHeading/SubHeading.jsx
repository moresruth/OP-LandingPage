import React from 'react';
import './subheading.css';



const SubHeading = ({ title}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className=" app__subheading-text" > {title}</p>
   
  </div>
);

export default SubHeading;
