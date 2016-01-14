import $ from 'jquery';
import React, { Component } from 'react';
import DateTime from 'react-datetime';

class TagFilter extends Component {
  componentDidMount () {
    $('.ui.checkbox').checkbox();
    $('.ui.dropdown').dropdown();
  }

  render () {
    return (
      <div>
        <div className='ui form'>
          <div className='three fields'>
            <div className='field'>
              <label>Start Tag</label>
              <select className="ui search dropdown">
                <option value="">Tag Name</option>
                <option value="ui">UIF</option>
                <option value="maui">Maui</option>
                <option value="rpm">RPM</option>
                <option value="ui-superadmin">Super Admin</option>
                <option value="BVI">BVI</option>
              </select>
            </div>
            <div className='field'>
              <label style={{marginBottom: '6px'}}>
                <div className="ui slider checkbox">
                  <input type="radio" name="throughput" checked="checked" />
                  <label>End Tag</label>
                </div>
              </label>
              <select className="ui search dropdown">
                <option value="">Tag Name</option>
                <option value="ui">UIF</option>
                <option value="maui">Maui</option>
                <option value="rpm">RPM</option>
                <option value="ui-superadmin">Super Admin</option>
                <option value="BVI">BVI</option>
              </select>
            </div>
            <div className='field'>
              <label style={{marginBottom: '6px'}}>
                <div className="ui slider checkbox">
                  <input type="radio" name="throughput" checked="checked" />
                  <label>End Time</label>
                </div>
              </label>
              <DateTime className='ui input'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TagFilter;