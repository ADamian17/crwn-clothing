import React, { Component } from 'react';
import ShopData from './shopData';
import PreviewCollection from '../../components/preview_collection/PreviewColection';

class shopPage extends Component {
  constructor (props) {
    super (props);

    this.state = {
      collection: ShopData
    }
  }


  render () {
    const collections = this.state.collection.map(({id, ...otherCollectionProps }) => (
      < PreviewCollection key={id} {...otherCollectionProps} />
    ));
    return (
      <div className='shop-page' > 
        { collections }
    </div>  
    )
  }
}


export default shopPage;