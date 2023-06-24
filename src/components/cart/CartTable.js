import React from "react";

import classes from "./CartTable.module.css";
import { useDispatch, useSelector } from "react-redux";
import priceFormat from "../../utils/priceFormat";

import {
  faTrashCan,
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";

export default function CartTable() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const onChangeItemQuant = (item, e) => {
    const type = "replace";
    dispatch(
      cartActions.editCart({
        item: item,
        quant: { type: type, quant: e.target.value },
      })
    );
  };

  const onIncreaseItemQuant = (item) => {
    const type = "increase";
    dispatch(
      cartActions.editCart({ item: item, quant: { type: type, quant: 1 } })
    );
  };

  const onDeleteItem = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };

  const onDecreaseItemQuant = (items) => {
    const type = "decrease";
    if (items.quant > 1) {
      dispatch(
        cartActions.editCart({
          item: items.item,
          quant: { type: type, quant: 1 },
        })
      );
    } else {
      dispatch(cartActions.removeFromCart(items.item));
    }
  };

  return (
    <>
      <table className={classes.cart_table}>
        <thead>
          <tr className={classes.cart_tableHeaders}>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((items) => (
              <tr className={classes.cart_item}>
                <td>
                  <img
                    alt="Product cart"
                    className={`${classes.cart_itemImg} img-fluid`}
                    src={items.item.img1}
                  />
                </td>
                <td>
                  <p className={`${classes.cart_itemName} w-20`}>
                    {items.item.name}
                  </p>
                </td>
                <td>
                  <p className={classes.cart_itemPrice}>
                    {priceFormat(items.item.price)}
                  </p>
                </td>
                <td className={classes.cart_itemQuant}>
                  <div className={classes.cart_inputWrapper}>
                    <FontAwesomeIcon
                      className={classes.cart_left}
                      icon={faAngleLeft}
                      onClick={() => {
                        onDecreaseItemQuant(items);
                      }}
                    />
                    <input
                      type="number"
                      value={items.quant}
                      className={classes.cart_input}
                      onChange={(e) => {
                        onChangeItemQuant(items.item, e);
                      }}
                    />
                    <FontAwesomeIcon
                      className={classes.cart_right}
                      icon={faAngleRight}
                      onClick={() => {
                        onIncreaseItemQuant(items.item);
                      }}
                    />
                  </div>
                </td>
                <td>
                  <p className={classes.cart_itemTotalPrice}>
                    {priceFormat(items.item.price * items.quant)}
                  </p>
                </td>
                <td className={classes.cart_itemRemove}>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={() => {
                      onDeleteItem(items.item);
                    }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <p className="text-center text-secondary">
              You have no item in cart
            </p>
          )}
        </tbody>
      </table>
      <div className={classes.cart_footer}>
        <Link to="/shop" className={classes.cart_footerContentLeft}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Continue shopping</span>
        </Link>
        <div className={classes.cart_footerContentRight}>
          <Link to="/checkout">
            <span>Proceed to checkout </span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </>
  );
}
