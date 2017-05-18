import React from 'react';
import {Link} from 'react-router-dom';
import RouteWithSubRoutes from '../RouteWithSubRoutes';

function Transactions( { routes } ) {
  return (
    <div>
      <h2>The Transactions Component</h2>
      <ul>
        <li><Link to="/tx/detail/4">Transaction detail</Link></li>
        <li><Link to="/tx/edit/4">Transaction edit</Link></li>
        <li><Link to="/tx/search">Transaction search</Link></li>
      </ul>

      {routes.map( ( route, i ) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ) )}
    </div>
  );
}

export default Transactions;
