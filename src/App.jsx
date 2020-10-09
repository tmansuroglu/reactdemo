import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import './App.css';

export default class App extends Component {
  render() {
    return(
      <div>
        <SearchBar brand="MovieBox" searchText={''} />
        <div className="my-3">{this.props.children}</div>
      </div>
    );
  }
}
