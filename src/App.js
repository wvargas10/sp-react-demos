import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

// Import Bootstrap, make it available to all sub-components
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

import {tx, people} from '../data/class-data';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import Transactions from './tx/Transactions';
import TransactionDetailContainer from './tx/TransactionDetailContainer';
import TransactionSearch from './tx/TransactionSearch';
import Demos from './Demos';
import TransactionEditContainer from './tx/TransactionEditContainer';

class App extends Component {
  constructor() {
    super();
    this.state = { tx, people };
    this.numPeople = this.state.people.size();

    this.routes = [
      {
        path     : '/tx',
        component: Transactions,
        routes   : [
          {
            path     : '/tx/detail/:id',
            component: TransactionDetailContainer
          },
          {
            path     : '/tx/edit/:id',
            component: TransactionEditContainer
          },
          {
            path     : '/tx/search',
            component: TransactionSearch
          }
        ]
      },
      {
        path     : '/demos',
        component: Demos
      }
    ];

    console.log( 'There are %d transactions.', tx.size() );
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/tx">Transactions</Link></li>
            <li><Link to="/demos">Demos</Link></li>
          </ul>

          {this.routes.map( ( route, index ) => (
            <RouteWithSubRoutes key={index} {...route}/>
          ) )}
        </div>
      </Router>
    );
  }
}

export default App;
