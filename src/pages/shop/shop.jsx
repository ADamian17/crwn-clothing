import React, { Component } from 'react';
import ShopData from './shopData';
import PreviewCollection from '../../components/preview_collection/PreviewColection'

class shopPage extends Component {
  constructor (props) {
    super (props) 

    this.state = {
      collection: ShopData
    }
  }


  render () {
    const { collections } = this.state;
    console.log(collections) 
    return (
      <div className='shop-page' > 
      {/* {
        collections.map(({id, ...otherCollectionProps }) => (
          < PreviewCollection key={id} {...otherCollectionProps} />
        ))
      } */}
    </div>  
    )
  }
}


export default shopPage;