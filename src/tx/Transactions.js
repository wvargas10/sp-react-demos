import React, {Component} from 'react';
import TransactionList from './TransactionList';
import TransactionDetail from './TransactionDetail';
import {txDAO} from '../../data/class-data';

class Transactions extends Component {
  constructor( props ) {
    super( props );

    let defaultTx = txDAO.get( 1 );

    this.state = {
      currentView: 'list',
      tx         : defaultTx
    };

    this.handleRowClick = this.handleRowClick.bind( this );
    this.backToList= this.backToList.bind( this );
  }

  handleRowClick( tx ) {
    console.log( 'Transactions.handleRowClick(): ', tx );
    this.setState( {
      currentView: 'detail',
      tx         : tx
    } );
  }

  backToList() {
    this.setState( { currentView: 'list' } )
  }

  render() {
    let view = (
      <div className="row">
        <div className="col-md-12">
          <TransactionList txList={txDAO.list()} onRowClick={this.handleRowClick}/>;
        </div>
      </div>
    );

    if ( this.state.currentView === 'detail' ) {
      view = (
        <section>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <TransactionDetail tx={this.state.tx}/>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-5">
            <div className="text-center">
              <button className="btn btn-default" onClick={this.backToList}>Return to List
              </button>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h2>Transactions</h2>
            </div>
          </div>
        </div>
        {view}
      </section>
    );
  }
}

export default Transactions;
