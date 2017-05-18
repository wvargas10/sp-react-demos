import React, {Component} from 'react';

class CustomDropDown extends Component {
  constructor( props ) {
    super( props );

    this.idField = props.idField || 'id';

    this.handleChange = this.handleChange.bind(this);
  }

  getLabel( option, label ) {
    let labels = label.split( /\s+/ );
    return labels.map( label => option[ label ] ).join( ' ' );
  }

  handleChange(event) {
    let found = this.props.options.find(option => option[this.idField] === Number(event.target.value));

    console.log('CustomDropDown selected: ', found);
  }

  render() {
    return (
      <select onChange={this.handleChange}>
        {this.props.options.map( (option, index) => (
          <option value={option[ this.idField ]} key={index}>{this.getLabel( option, this.props.label )}</option>
        ) )}
      </select>
    );
  }
}

export default CustomDropDown;
