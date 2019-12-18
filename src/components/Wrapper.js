import React from 'react';
import axios from 'axios';
import './styles/wrapper.css';

export default class Wrapper extends React.Component {
  constructor() {
    super();
    console.log('constructor()');
    this.state = {
      todos: [],
      token: ''
     };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    console.log(prevProps);
    console.log(prevState);
    return null;
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`getDerivedStateFromProps ${props}`);
    console.log(`getDerivedStateFromProps ${state}`);
    return null;
  }

  getData = () => {
    axios.get('https://asta-web-1.herokuapp.com/api/todo', {timeout: 2000})
      .then(data => this.setState({ todos: data.data }))
      .catch(e => console.log(e));
  }

  setStorage = () => {
    localStorage.setItem('test', 1);
    sessionStorage.setItem('sess', 'asta');
  }

  login = () => {
    axios.post('http://localhost:8000/api/login')
      .then(data => {
        this.setState({
          token: data.data.token
        }, () => console.log( this.state.token ));
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log('render()');
    return (
      <div>
        <button onClick={this.setStorage}>Set storage</button>
        <button onClick={this.login}>Login</button>
        <button onClick={this.getData}>Get data</button>
        <ul id="list">
          { this.state.todos.map(el => <li key={el._id}>{el._id}</li>) }
        </ul>
      </div>
    );
  }
}
