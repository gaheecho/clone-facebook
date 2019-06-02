import React, { Component } from 'react';
import Header from 'components/header';
import Sidebar from 'components/sidebar';
import Timeline from 'components/timeline';
import FriendsStateList from 'components/friends-state-list';

class Main extends Component {
  render() {
    return <div>
        <Header/>
        <Sidebar/>
        <Timeline/>
        <FriendsStateList/>
    </div>;
  }
}

export default Main;