import React, { Component } from 'react';

export default class AdminLogin extends Component {
  componentDidMount () {
      function loadScript() {
           var script= document.createElement('script');
           script.type= 'text/javascript';
           script.src= 'yourURLhere.js';
           script.async = true;
           document.body.appendChild(script);
      }
      loadScript();
  }

  render() {
    return;
  }

}
