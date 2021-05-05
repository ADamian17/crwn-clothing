import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const seletDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
