import React, { Component } from 'react';
import CommitFilter from './CommitFilter.jsx';
import CommitList from './CommitList.jsx';
import TicketList from './TicketList.jsx';

class App extends Component {
  render () {
    return (
      <div className='ui grid' style={{marginTop: '0'}}>
        <div className='sixteen wide column center aligned' style={{paddingBottom: '0'}}>
          <h1 style={{fontSize: '40px', color: '#666'}}>Commit Tracking</h1>
        </div>
        <div className='three wide column' />
        <div className='ten wide column'>
          <CommitFilter />
        </div>

        <div className='three wide column' />
        <div className='three wide column' />

        <div className='four wide column'>
          <TicketList />
        </div>

        <div className='six wide column'>
          <CommitList />
        </div>
      </div>
    );
  }
}

export default App;
