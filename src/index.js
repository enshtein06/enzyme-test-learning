import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';

import App from 'components/App';

// createStore() takes 2 arguments: reducers and initial state
ReactDOM.render(
	<Root>
		<App />
	</Root>, 
	document.querySelector('#root')
);
