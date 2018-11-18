import React, { Component } from 'react';
import Body from './components/Body';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: {}
    }
}
componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/76341?api_key=6ba6426aea245961c58a70307114ce1a')
    .then((response) => response.json())
    .then(data => this.setState({data}));
}
  render() {
    return (
      <div className="App">
        <Body data={this.state.data} />
      </div>
    );
  }
}

export default App;
