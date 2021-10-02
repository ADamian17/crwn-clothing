import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { seletDirectorySections } from '../../redux/directory/directory.selector.js';

import { DirectoryMenu } from './Directory.styles';
import MenuItem from '../menu-item/Menu-item';

import './Directory.scss';

const Directory = ({ sections }) => {

  return (
    <DirectoryMenu>
      {sections.map((section) => (
        <MenuItem key={section.id}  {...section} />))}
    </DirectoryMenu>
  )
}
const mapStateToProps = createStructuredSelector({
  sections: seletDirectorySections
})

export default connect(mapStateToProps)(Directory);
