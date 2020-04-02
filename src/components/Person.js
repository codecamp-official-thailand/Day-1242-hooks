import React from 'react';
import { Input } from 'antd';
import './Person.css'
import PropTypes from 'prop-types';

class Person extends React.Component {
  render() {
    console.log()
    console.log(`[Person.js] Index:${this.props.idx} Render...`)
    return (
      <div className="Card-person" onScroll={this.props.onDelete}>
        <p>My name is {this.props.name}, I'm {this.props.age} years old.</p>
        <Input style={{ width: '80px' }} onChange={(e) => this.props.onChangeInput(e, this.props.idx)} />
      </div>
    )
  }
}

Person.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  onDelete: PropTypes.func,
  onChangeInput: PropTypes.func
}

export default Person;
