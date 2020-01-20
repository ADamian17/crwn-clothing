import React from 'react';

import './PreviewCollection.scss';


const  PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection">
    <h1 className="title">{title.toUpperCase()}</h1> 
      <div className="preview">
        {items.map( item => (
          <div key={item.id} > {item.name} </div>
        ))}
      </div>
  </div>
  )
} 

export default PreviewCollection;