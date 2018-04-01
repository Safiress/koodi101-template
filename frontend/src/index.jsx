/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

const baseURL = "http://195.201.28.135:9000";

/****** ADD YOUR CODE AFTER THIS LINE ******/

const getGreetingFromBackend = async () => {
  try {
    const url = `${baseURL}/api/chats`
    console.log("Getting greeting from "+url)
    const response = await fetch(url);
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return { greeting :"Could not get greeting from backend"};
};


const BackendGreeting = (props) => (
  <div>{props.greeting.map((peruna)=>{return <p>{peruna.message}</p>})}</div>
);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      greeting: [],
    };
  }

  async componentWillMount() {
    const response = await getGreetingFromBackend();
    console.log(response)
    this.setState({greeting: response.results});
  }

  render() {
    console.log(this.state.greeting)
    return (
      <BackendGreeting greeting={this.state.greeting} />
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
