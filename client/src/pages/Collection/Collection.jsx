import React from 'react';

import { useSelector } from 'react-redux'
import { useParams } from 'react-router';

import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-Item/CollectionItem';

import './Collection.scss';

const CollectionPage = () => {
  const params = useParams()
  const collection = useSelector(selectCollection(params.collection))
  const { title, items } = collection;

  /*  
    useMemo is for ogjects
    useCallback is for function
    
    they are use when you don't want a function our obj to be reinitialize between renders 
  */

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>

      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
};

export default CollectionPage;
