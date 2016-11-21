import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import findMeApp from './redux/reducers.js';
import { Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import globalStyles from './../styles/global.styl';
import { App } from './Containers/App/App';
import Create from './Containers/Create/Create';
import { Chrome } from './Containers/Chrome/Chrome';
import { Find } from './Containers/Find/Find';

const store = createStore(findMeApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
	<Provider store={store}>
		<Router history={ hashHistory }>
			<Route component={App}>
				<Route path="/" component={Chrome}>
					<Route path="create" component={Create} />
					<Route path="find" component={Find} />
					<IndexRoute component={Create} />
				</Route>
			</Route>
		</Router>
	</Provider>
), document.getElementById('app'));
