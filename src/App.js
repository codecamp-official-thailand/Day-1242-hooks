import React from 'react';
import './App.css';
import { Button } from 'antd'
import Person from './components/Person';
import CountPerson from './components/CountPerson'

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Constructor')
    this.state = {
      isShow: true,
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

  onInputChange = (e, index) => {
    const oldPersonList = [...this.state.personList];
    // อย่าทำแบบนี้: const oldPersonList = this.state.personList;
    oldPersonList.push({
      name: "Tong",
      name: 25
    })
    oldPersonList[index].name = e.target.value;
    this.setState({
      personList: oldPersonList
    })
  }

  changeAge = () => {
    this.setState({
      personList: [
        { name: "Sonter", age: 10 },
        { name: "Tobtab", age: 10 },
        { name: "Xeus", age: 10 }
      ]
    })
  }

  render() {
    console.log('[App.js] Render...')
    const isShow = this.state.isShow
    let personList = null;

    if (isShow) {
      personList = (
        <div>
          {this.state.personList.map((person, idx) => (
            <Person
              key={idx}
              onChangeInput={this.onInputChange}
              idx={idx}
              name={person.name}
              age={person.age} />
          ))}
        </div>
      )
    }

    return (
      <div className="App" >
        <Button onClick={this.onClickShow}> Toggle Students </Button>
        <Button onClick={this.changeAge}>Change all people age</Button>
        <Button onClick={() => this.setState({ testNotOnAnyJSX: this.state.testNotOnAnyJSX + 1 })}>Test DOM</Button>
        <br />
        {personList}
        <CountPerson personList={this.state.personList} />
      </div>
    );
  }
}

export default App;
