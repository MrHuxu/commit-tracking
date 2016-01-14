import $ from 'jquery';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DateTime from 'react-datetime';

require('../../node_modules/react-datepicker/dist/react-datepicker.css');

class CommitFilter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      startDate: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (date) {
    this.setState({
      startDate: date
    });
  }

  componentDidMount () {
    $('.ui.dropdown').dropdown();
  }

  render () {
    return (
      <div className='ui four column grid'>
        <div className='column'>
          <div className='ui two column grid'>
            <div className='right aligned column'>
              <h4>Repository:</h4>
            </div>
            <div className='left aligned column'>
              <select className="ui search dropdown">
                <option value="">Repo Name</option>
                <option value="ui">UIF</option>
                <option value="maui">Maui</option>
                <option value="rpm">RPM</option>
                <option value="ui-superadmin">Super Admin</option>
                <option value="BVI">BVI</option>
              </select>
            </div>
          </div>
        </div>

        <div className='column'>
          <div className='ui two column grid'>
            <div className='right aligned column'>
              <h4> Branch: </h4>
            </div>
            <div className='left aligned column'>
              <select className="ui search dropdown">
                <option value="">Branch Name</option>
                <option value="ui">UIF</option>
                <option value="maui">Maui</option>
                <option value="rpm">RPM</option>
                <option value="ui-superadmin">Super Admin</option>
                <option value="BVI">BVI</option>
              </select>
            </div>
          </div>
        </div>

        <div className='column'>
          <div className='ui two column grid'>
            <div className='right aligned column'>
              <h4> Tag: </h4>
            </div>
            <div className='left aligned column'>
              <select className="ui search dropdown">
                <option value="">Branch Name</option>
                <option value="ui">UIF</option>
                <option value="maui">Maui</option>
                <option value="rpm">RPM</option>
                <option value="ui-superadmin">Super Admin</option>
                <option value="BVI">BVI</option>
              </select>
            </div>
          </div>
        </div>
        <div className='column' />

        <div className='column'>
          <div className='ui two column grid'>
            <div className='right aligned column'>
              <h4> Start Time: </h4>
            </div>
            <div className='left aligned column'>
            <DateTime />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CommitFilter;