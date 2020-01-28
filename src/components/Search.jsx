import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateSearch }  from './../store/actions';

const Search = props => {
  const [search, setSearch] = useState('');
  const { dispatch } = props;

  const handleChange = ev =>{
    setSearch(ev.target.value);
    //setData(ev.target.value);
    dispatch(updateSearch(ev.target.value))
  }
  return (
    <input type='text' value={search} placeholder='Search Items' onChange={handleChange}/>
  );
};

// const mapDispatchToProps = dispatch => {
//   setData : text => dispatch(updateSearch(text))
// }

///export default connect(null, mapDispatchToProps)(Search);
export default connect()(Search)