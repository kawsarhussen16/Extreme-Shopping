import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUser = createSelector(
    [selectUser], user => user.currentuser
);