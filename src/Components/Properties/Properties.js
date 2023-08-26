import React from 'react'
import SearchBox from './SearchBox';
import './Properties.css';
import BoxList from './BoxList/BoxList';

function Properties() {
  return (
    <div>
    <SearchBox></SearchBox>
    <div className=''>
    <BoxList ></BoxList>
    </div>
  
    </div>
  );
}

export default Properties