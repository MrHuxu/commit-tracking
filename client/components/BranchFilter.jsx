import $ from 'jquery';
import React, { Component } from 'react';
import DateTime from 'react-datetime';

class BranchFilter extends Component {
  componentDidMount () {
    $('.ui.dropdown').dropdown();
  }

  render () {
    return (
      <div>
        <div className='ui form'>
          <div className='three fields'>
            <div className='field'>
              <label>Branch</label>
              <select className="ui search dropdown">
                <option value="">Branch Name</option>
                <option value="ui">UIF</option>
                <option value="maui">Maui</option>
                <option value="rpm">RPM</option>
                <option value="ui-superadmin">Super Admin</option>
                <option value="BVI">BVI</option>
              </select>
            </div>

            <div className='field'>
              <label>Start Time</label>
              <DateTime className='ui input'/>
            </div>

            <div className='field'>
              <label>End Time</label>
              <DateTime className='ui input'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BranchFilter;