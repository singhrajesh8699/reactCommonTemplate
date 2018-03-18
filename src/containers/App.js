/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import SideNavBar from '../components/Layouts/NavBarr/SideNavBar';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/login';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <SideNavBar>
             <Route exact path="/" component={HomePage} />
          </SideNavBar>
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
