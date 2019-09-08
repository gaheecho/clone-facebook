import React, { Component } from 'react';
import Header from 'components/header';
import Navigation from 'components/navigation';
import TimelineConainer from 'containers/timeline';
import ChatSidebar from 'components/chat-sidebar';
import './main.scss';

class Main extends Component {
  render() {
    return <div className="main-view">
        <Header/>
        <Navigation/>
        <TimelineConainer/>
        <ChatSidebar/>
    </div>;
  }
}

export default Main;