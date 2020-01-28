import React from 'react';
import { connect } from 'react-redux';

import './Display.css'

const Display = props => {
  const { text } = props;
  console.log('text', text)
  return (
    <h4 className='mt-4'>{text}</h4>
  );
};

const mapStateToProps = state => ({
  text: state.search.text
})

export default connect(mapStateToProps)(Display);