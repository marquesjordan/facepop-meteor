import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// App component - represents the whole app
export default (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}
