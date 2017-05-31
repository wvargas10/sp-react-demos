import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';

// Import Bootstrap, make it available to all sub-components
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './css/local.css'

import {tx, people} from '../data/class-data';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import Transactions from './tx/Transactions';
import TransactionDetailContainer from './tx/TransactionDetailContainer';
import TransactionSearch from './tx/TransactionSearch';
import Demos from './Demos';
import TransactionEditContainer from './tx/TransactionEditContainer';
import FunctionalPropsContainer from './demos/FunctionalPropsContainer';
import ClassPropsContainer from './demos/ClassPropsContainer';
import PassingData from './demos/PassingData';

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
        component: Demos,
        routes   : [
          {
            path: '/demos/functional-props',
            component: FunctionalPropsContainer
          },
          {
            path: '/demos/class-props',
            component: ClassPropsContainer
          },
          {
            path: '/demos/passing-data',
            component: PassingData
          }
        ]
      }
    ];

    console.log( 'There are %d transactions.', tx.size() );
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <a href="#" className="navbar-brand">Banking</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><NavLink activeClassName="active" to="/tx">Transactions</NavLink></li>
                <li><NavLink activeClassName="active" to="/demos">Demos</NavLink></li>
              </ul>
            </div>
          </nav>

          <div>
            {this.routes.map( ( route, index ) => (
              <RouteWithSubRoutes key={index} {...route}/>
            ) )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
