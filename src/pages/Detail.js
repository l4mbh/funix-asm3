import React, { useEffect, useState } from 'react'
import { useParams, useRouteLoaderData } from 'react-router-dom'
import ProductDetail from '../components/detail/ProductDetail'

export default function Detail() {

  const [relatedItems, setRelatedItems] = useState([]);

  const [filteredItem, setFilteredItem] = useState({});

  const param = useParams();
  const prodId = param.id;

  const data = useRouteLoaderData('root');

  useEffect(() => {
    const filteredProduct = data.filter( prod => prod._id.$oid === prodId);
    setFilteredItem(filteredProduct[0]);

    const relatedProducts = data.filter( prod => (prod.category === filteredItem.category && prod._id.$oid !== prodId));
    setRelatedItems(relatedProducts);
  }, 
  [prodId, data,  filteredItem.category])


  return (
    <div>
      <ProductDetail product={filteredItem} relatedProducts={relatedItems}/>
    </div>
  )
}
