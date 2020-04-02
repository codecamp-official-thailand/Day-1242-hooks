import React from 'react'
import { Input } from 'antd'

export default class Person extends React.Component {
  render() {
    console.log()
    console.log(`[Person.js] Index:${this.props.idx} Render...`)
    return (
      <div>
        <p>My name is {this.props.name}, I'm {this.props.age} years old.</p>
        <Input onChange={(e) => this.props.onChangeInput(e, this.props.idx)} />
      </div>
    )
  }
}
