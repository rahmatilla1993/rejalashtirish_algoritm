import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Table from './Table'
import reportWebVitals from './reportWebVitals';

let arr = [{
	name: 'a',
	begin: 0,
	resource: 5,
	priority: 10
},
	{
		name: 'b',
		begin: 1,
		resource: 7,
		priority: 6
	},
	{
		name: 'c',
		begin: 0,
		resource: 6,
		priority: 4
	},
	{
		name: 'd',
		begin: 2,
		resource: 5,
		priority: 3
	}];


ReactDOM.render(
	<React.StrictMode>
		<App arr={arr}/>
  </React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();