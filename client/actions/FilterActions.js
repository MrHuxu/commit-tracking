export const CHANGE_REPO = 'CHANGE_REPO';
export function changeRepo (data) {
  return {
    type: CHANGE_REPO,
    content: data
  };
}

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export function changeCategory (data) {
  return {
    type: CHANGE_CATEGORY,
    content: data
  };
}

export const SELECT_RECORD = 'SELECT_RECORD';
export function selectRecord (data) {
  return {
    type: SELECT_RECORD,
    content: data
  };
}