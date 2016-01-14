import $ from 'jquery';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagFilter from './TagFilter.jsx';
import BranchFilter from './BranchFilter.jsx';
import { changeRepo, changeCategory } from '../actions/FilterActions';

class CommitFilter extends Component {
  constructor (props) {
    super(props);

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChangeCategory (category) {
    this.props.dispatch(changeCategory(category));
  }

  componentDidMount () {
    const { dispatch, repo } = this.props;

    $('.ui.dropdown.repo')
    .dropdown('set selected', repo)
    .dropdown('setting', 'onChange', (value) => {
      dispatch(changeRepo(value));
    });
    $('.tabular.menu .item').tab();
  }

  render () {
    return (
      <div>
        <div className='ui segment'>
          <div className='ui top blue attached label'>Commit Filter</div>
          <div className='ui form'>
            <div className='inline fields'>
              <div className='five wide field'>
                <label>Repository:</label>
                <select className='ui search dropdown repo'>
                  <option value=''>Repo Name</option>
                  <option value='ui'>UIF</option>
                  <option value='maui'>Maui</option>
                  <option value='rpm'>RPM</option>
                  <option value='ui-superadmin'>Super Admin</option>
                  <option value='BVI'>BVI</option>
                </select>
              </div>
            </div>
          </div>

          <div className='ui top attached tabular menu'>
            <a className='active item' data-tab='first' onClick={this.handleChangeCategory.bind(null, 'tag')}>Filter by Tags</a>
            <a className='item' data-tab='second' onClick={this.handleChangeCategory.bind(null, 'branch')}>Filter by Branch</a>
          </div>
          <div className='ui bottom attached active tab segment' data-tab='first'>
            <TagFilter />
          </div>
          <div className='ui bottom attached tab segment' data-tab='second'>
            <BranchFilter />
          </div>

          <button className='ui green button' style={{marginTop: '15px'}} onClick={this.handleSearch}> Search </button>

        </div>
      </div>
      
    )
  }
}

var mapStateToProps = function (state) {
  return {
    repo: state.filter.repo
  };
}

export default connect(mapStateToProps)(CommitFilter);