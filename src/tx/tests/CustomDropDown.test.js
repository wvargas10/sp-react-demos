import React from 'react';
import {shallow} from 'enzyme';
import CustomDropDown from '../CustomDropDown';
import {people} from '../../../data/class-data';

let personList;

beforeEach(() => {
  personList = people.list();
});

test( 'CustomDropDown single labels render correctly', () => {
  const dropDown = shallow(
    <CustomDropDown idField="id" label="lastName" options={personList}/>
  );

  expect( dropDown.text() ).toMatch( new RegExp( personList[ 0 ].lastName ) );

  // Negative confirmation
  expect(dropDown.text()).not.toMatch(/Paxton/);
} );

test( 'CustomDropDown multiple labels render correctly', () => {
  const dropDown = shallow(
    <CustomDropDown idField="id" label="firstName lastName" options={personList}/>
  );

  expect( dropDown.text() ).toMatch( new RegExp( `${personList[ 0 ].firstName} ${personList[0].lastName}` ) );

  // Negative confirmation
  expect(dropDown.text()).not.toMatch(/Paxton/);
})