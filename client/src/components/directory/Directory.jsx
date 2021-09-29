import React from 'react';
import { chunk } from 'lodash';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { seletDirectorySections } from '../../redux/directory/directory.selector.js';

import { Row } from './Directory.styles.js';
import MenuItem from '../menu-item/Menu-item';

import './Directory.scss';

const Directory = ({ sections }) => {
  const rows = chunk(sections, 3);

  return (
    <div className="directory-menu">
      {
        rows.map((row, idx) => (
          <Row key={idx}>
            {
              row.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} className={`item-${id}`} />))
            }
          </Row>
        )
        )

      }
      {/* {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} className={`item-${id}`} />))} */}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  sections: seletDirectorySections
})

export default connect(mapStateToProps)(Directory);
