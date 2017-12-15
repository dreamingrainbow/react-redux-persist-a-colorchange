import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { getCurrentBackground, changeCurrentBackground, getCurrentModalBackground } from './actions';
class App extends Component {

  changeColorEvent(e) {
    this.props.changeCurrentBackground(e.target.value);
    this.setState({
      backgroundColor : this.props.getCurrentBackground(),
      modalBackgroundColor : this.props.getCurrentModalBackground()
    });
  }
  componentDidMount() {
    this.setState({
      backgroundColor : this.props.getCurrentBackground(),
      modalBackgroundColor : this.props.getCurrentModalBackground()  
    });
    
  }
  render() {
    document.body.style.backgroundColor = this.props.backgroundColor;
    
    return (
      <div className="App" style={{backgroundColor:this.props.modalBackgroundColor}} >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <input onChange={(e) => {this.changeColorEvent(e)}} placeholder={this.props.backgroundColor} />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      backgroundColor: state.backgroundColor,
      modalBackgroundColor: state.modalBackgroundColor
    };
}

export default connect(mapStateToProps, {getCurrentBackground, changeCurrentBackground, getCurrentModalBackground})(App);
