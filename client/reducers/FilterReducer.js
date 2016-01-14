import { CHANGE_REPO, CHANGE_CATEGORY } from '../actions/FilterActions';

export function filter (state = {
  category  : 'tag',
  repo      : 'ui',
  branch    : '',
  startTag  : '',
  endTag    : '',
  startTime : '',
  endTime   : ''
}, action) {
  switch (action.type) {
    case CHANGE_REPO:
      return Object.assign({}, state, {repo: action.content});

    case CHANGE_CATEGORY:
      return Object.assign({}, state, {category: action.content});

    default:
      return state;
  }
};