import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ListFridge from './components/ListFridge';
import ListNews from './components/ListNews';
import reducer from './store/reducers';
import Header from './components/Header';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Nav from  './components/Nav';
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <Header/>
          <Router>
            <Nav />
            <Switch>
            <Route path="/ListNews" component ={ListNews} />
              {isAdmin && <Route path="/ListNews" component ={ListNews} />}
            <Route path="/ListFridge" component ={ListFridge} />
            </Switch>
          </Router>
      </Provider>

    );
  }
}
