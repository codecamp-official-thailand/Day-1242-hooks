import React from 'react';
import './App.css';
import { Button } from 'antd'
import Person from './components/Person';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Constructor')
    this.state = {
      isShow: true,
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
    const oldPersonList = this.state.personList;
    oldPersonList[index].name = e.target.value;
    this.setState({
      personList: oldPersonList
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
        <br />
        {personList}
      </div>
    );
  }
}

export default App;
