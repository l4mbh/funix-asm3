import React from 'react'

import classes from './CartTotal.module.css';
import { useSelector } from 'react-redux';
import priceFormat from '../../utils/priceFormat';
import CartCoupon from './CartCoupon';

export default function CartTotal() {

  const cartItems = useSelector(state => state.cart.cartItems);

  let totalCartPrice = 0;
  cartItems.every(items => {
    const itemTotalPrice = items.item.price * items.quant;
    totalCartPrice += itemTotalPrice;
  })

  return (
    <div className={classes.cartTotal}>
      <h1 className={classes.cartTotal_title}>Cart total</h1>
      <div className={classes.cartTotal_subtotal}>
        <p className={classes.cartTotal_subtotalText}>Subtotal</p>
        <p className={classes.cartTotal_subtotalPrice}>{priceFormat(totalCartPrice)}</p>
      </div>
      <hr></hr>
      <div className={classes.cartTotal_total}>
        <p className={classes.cartTotal_totalText}>total</p>
        <p className={classes.cartTotal_totalPrice}>{priceFormat(totalCartPrice)}</p>
      </div>
      <CartCoupon />
    </div>
  )
}
