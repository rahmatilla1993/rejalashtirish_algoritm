import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const arr = [{
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