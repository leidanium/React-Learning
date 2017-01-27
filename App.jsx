import React from 'react';
import ReactDOM from 'react-dom';



import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';



export default class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Test</h1>
            <ul>
               <li><Link to="home">Home</Link></li>
               <li><Link to="about">About</Link></li>
               <li><Link to="contact">Contact</Link></li>
               
            </ul>
				
           {this.props.children}
         </div>
      );
   }
}

