import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';
import globalStyles from './../styles/global.styl';
import { App } from './Containers/App/App';
import { Create } from './Containers/Create/Create';

ReactDOM.render((
	<Router history={ hashHistory }>
		<Route component={App}>
			<Route path="create" component={Create} />
		</Route>
	</Router>
), document.getElementById('app'));