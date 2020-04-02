import React, { Component } from 'react'

export default class CountPerson extends Component {

  render() {
    console.log("[CountPerson.js] Render...")
    return (
      <div>
        Length: {this.props.personList.length}
      </div>
    )
  }
}
