import React from 'react';

import classes from './CheckoutOrderList.module.css';
import priceFormat from '../../utils/priceFormat';

export default function CheckoutOrderList ({items}) {

  return (
    <div>
      <ul className={classes.checkout_orderList}>
      {
        items.map(item => {
          return <li className={classes.checkout_orderItem} key={item.item._id.$oid}>
            <p className={classes.checkout_orderItemName}>{item.item.name}</p>
            <p className={classes.checkout_orderItemPrice}>{`${priceFormat(item.item.price)} x ${item.quant}`}</p>
          </li>
        })
      }
      </ul>
    </div>
  )
}
