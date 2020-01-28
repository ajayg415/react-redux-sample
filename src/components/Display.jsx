import React from 'react';
import { connect } from 'react-redux';

const Display = props => {
  const { text } = props;
  console.log('text', text)
  return (
    <h4>{text}</h4>
  );
};

const mapStateToProps = state => ({
  text: state.text
})

export default connect(mapStateToProps)(Display);