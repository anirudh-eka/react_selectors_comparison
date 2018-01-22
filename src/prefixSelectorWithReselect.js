import { createSelector } from 'reselect';

const getData = (state) => state.prefix;

export const name = 'Reselect'
export default createSelector([getData], (prefix) => prefix + ' World!')