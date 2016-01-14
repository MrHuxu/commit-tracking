import React, { Component } from 'react';
import CommitFilter from './CommitFilter.jsx';
import CommitList from './CommitList.jsx';
import TicketList from './TicketList.jsx';

class App extends Component {
  render () {
    return (
      <div className='ui grid' style={{marginTop: '10px'}}>
        <div className='sixteen wide column center aligned'>
          <h1 style={{fontSize: '40px', color: '#666'}}>Release Owner Tools</h1>
        </div>
        <div className='three wide column' />
        <div className='ten wide column'>
          <CommitFilter />
        </div>
      </div>
    );
  }
}

export default App;