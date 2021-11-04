import React, { Component } from 'react'
import './App.css';
// import One from './component/One';
//import Two from './component/Two';
//import MultipleReturn from './component/MultipleReturn';
//import Hoc from './component/Hoc';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './Screen/Home';
import About from './Screen/About';
import Services from './Screen/Services';
import Location from './Screen/Location';
import PageError from './Screen/RouterError';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // name: 'hammad',
      //count: 0
      //show: false
    }
  }

  // componentDidMount() {
  //   console.log(' componentDidMount');
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate');
  //   console.log('prevProps', prevProps);
  //   console.log('prevState', prevState);
  // }
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate', this.state.count);
  //   // if (this.state.count > 5 && this.state.count < 10) {
  //   //   return true;
  //   // }
  //   return false
  // }

  render() {
    console.log('render');
    return (
      <Router>
        <div>
          {/* <h1>My name is: {this.state.name}</h1>
        <button onClick={() => this.setState({ name: this.state.name = "Muhemin" })}>Update Data</button>
        <h2>Class Counting: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increament ++</button> */}
          {/* {
          this.state.show ? <One /> : <h1>Student Component Deleted</h1>
        } */}
          {/* <button onClick={() => this.setState({ show: !this.state.show })}>Toggle Child Component</button> */}
          {/* <One name='hammad' /> */}
          {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click Increment</button> */}
          {/* <Two/> */}
          {/* <MultipleReturn /> */}
          {/* <Hoc/> */}

          <Switch>
            <Route path='/about' component={About}>
              <Navbar />
              <About />
            </Route>
            <Route path='/' component={Home} exact={true}>
              <Navbar />
              <Home />
            </Route>

            <Route path='/services' component={Services}>
              <Navbar />
              <Services />
            </Route>
            <Route path='/location' component={Location}>
              <Navbar />
              <Location />
            </Route>
            <Route path="*"><PageError /></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

