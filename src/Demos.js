import React from 'react';
import {Link} from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';

function Demos( { routes } ) {
  return (
    <div>
      <h3>List of Demos</h3>
      <ul>
        <li><Link to="/demos/functional-props">Functional Component with props</Link></li>
        <li><Link to="/demos/class-props">Class Component with props</Link></li>
        <li><Link to="/demos/passing-data">Passing Data</Link></li>
      </ul>

      <div className="row">
        <div className="col-md-12">
          {routes.map( ( route, i ) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ) )}
        </div>
      </div>

    </div>
  );
}

export default Demos;
