import React from 'react';
/*
 {
 "id": 1,
 "payeeId": 1,
 "personId": 201,
 "categoryId": 102,
 "accountId": 1,
 "txType": "2",
 "txDate": "2016-06-01T04:00:00.000Z",
 "amount": -1600
 },
 */


function TransactionEdit( props ) {
  return (
    <section>
    <h3>Transaction Edit</h3>
      <form>
        <div>
          <label htmlFor="tx-amount">Amount: </label>
          <input type="number" name="tx-amount" id="tx-amount"/>
        </div>
      </form>
    </section>
  );
}

export default TransactionEdit;
