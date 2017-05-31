import React from 'react';
import CustomFooter from './CustomFooter';

function PassingData( props ) {
  return (
    <div>
      <h2>Passing data to a component</h2>
      <CustomFooter companyName="The Super-Fake Banking Corporation"/>
    </div>
  );
}

export default PassingData;
