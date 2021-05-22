import React from 'react';

import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

import "./app.css";

  const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '50px',
    color: '#444',
    border: '1px solid #1890ff',
  };

  const button = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    background: '#1890ff',
    color: '#fff',
    fontSize: '14px',/*
    transition:font-size '12s',
    -webkit-transition:font-size '12s', /* Safari and Chrome 
    -o-transition:font-size '12s',
    cursor: 'pointer',*/
    transition: '.3s background',
    '&:hover': {
      background: '#40a9ff'
    }
  };

const PAGES = ['one', 'two', 'three'];
class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = { index: -1 };
  }


renderPages() {
  console.log(this.state.index);
  return PAGES[this.state.index];
}

setIndex() {
  let index = this.state.index > PAGES.length ? 0 : this.state.index + 1;
  this.setState({ index: index });
}

componentDidMount() {
  this.loop = setInterval(() => this.setIndex(), 3000);
}

componentWillUnmount() {
  clearInterval(this.loop);
}

  render() {
    
    return (
      <div style={wrapper}>
        
        <h1 style={button}>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

            {this.renderPages()}
            </ReactCSSTransitionGroup>
            </h1>
        </div>
    );
    
  }

  
}

export default App;
