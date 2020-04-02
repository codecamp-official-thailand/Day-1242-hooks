import React from 'react';
import './App.css';
import { Button, Row, Col, Input } from 'antd'
import Person from './components/Person';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Constructor')
    this.state = {
      isShow: true,
      ageInput: 0,
      nameInput: '',
      testNotOnAnyJSX: 0,
      personList: [
        { name: "Sonter", age: 19 },
        { name: "Tobtab", age: 18 },
        { name: "Xeus", age: 23 }
      ]
    }
  }

  onClickShow = () => {
    // ถ้าใช้ State เก่ามาคำนวณด้วยต้องเขียนแบบนี้
    this.setState((prevState, props) => ({
      isShow: !prevState.isShow
    }))
  }

  onChangeFieldAdd = (e) => {
    console.log(e.target)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onInputChange = (e, index) => {
    const oldPersonList = [...this.state.personList];
    oldPersonList[index].name = e.target.value;
    this.setState({
      personList: oldPersonList
    })
  }

  // Best practice
  deletePerson = idx => {
    // ถ้าไม่มี idx ส่งมาให้ใช้ findIndex
    const oldPersonList = [...this.state.personList];
    oldPersonList.splice(idx, 1);
    this.setState({
      personList: oldPersonList
    })
  }

  addPerson = () => {
    const name = this.state.nameInput;
    const age = this.state.ageInput;
    this.setState(prevState => ({
      personList: [...prevState, { name, age }]
    }))
  }

  render() {
    console.log('[App.js] Render...')
    const isShow = this.state.isShow
    let ageInput = this.state.ageInput;
    let nameInput = this.state.nameInput;
    let personList = null;
    let color = 'red';

    if (isShow) {
      personList = (
        <div>
          {this.state.personList.map((person, idx) => (
            <div>
              <br />
              <Person
                onDelete={this.deletePerson}
                key={idx}
                onChangeInput={this.onInputChange}
                idx={idx}
                name={person.name}
                age={Number(person.age} />
            </div>
          ))}
        </div>
      )
      color = 'green';
    }

    return (
      <div className="App" >
        <Row justify="center">
          <br />
          <Col span={4}>
            <Row justify="center">
              Name
            </Row>
          </Col>
          <Col span={2}>
            <Row justify="center">
              Age
            </Row>
          </Col>
          <Col span={2}>
            <Row justify="center">
              Action
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={4}>
            <Input value={nameInput} name="nameInput" onChange={this.onChangeFieldAdd} />
          </Col>
          <Col span={2}>
            <Input value={ageInput} name="ageInput" onChange={this.onChangeFieldAdd} />
          </Col>
          <Col span={2}>
            <Button onClick={this.addPerson} type="danger" style={{ width: '100%' }}>Add</Button>
          </Col>
        </Row>
        <br />
        <Button style={{ backgroundColor: color }} onClick={this.onClickShow}> Toggle Students </Button>
        <br />
        {personList}
      </div>
    );
  }
}

export default App;
