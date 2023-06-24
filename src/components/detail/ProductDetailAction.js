import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import classes from './ProductDetailAction.module.css'
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

export default function ProductDetailAction(props) {
  const [itemQuant, setItemQuant] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setItemQuant(0);
  },[])

  const increaseQuant = () => {
    setItemQuant((prevQuant) => prevQuant + 1);
  };

  const decreaseQuant = () => {
    if (itemQuant > 1) {
      setItemQuant((prevQuant) => prevQuant - 1);
    }
  };

  const onChangeQuantHandler = (e) => {
    setItemQuant(e.target.value);
  };

  const addToCartHandler = () => {
    if(itemQuant > 0){
      dispatch(cartActions.addToCart({quant : itemQuant, item: props.cartItem}))
      setItemQuant(0)
    }
  }
  return (
    <div className={classes.detailAction}>
      <div className={classes.detailAction_quantity}>
        <span className={classes.detailAction_text}>Quantity : </span>
        <div className={classes.detailAction_inputWrapper}>
          <FontAwesomeIcon
            className={classes.detailAction_left}
            icon={faAngleLeft}
            onClick={decreaseQuant}
          />
          <input
            type="number"
            value={itemQuant}
            onChange={onChangeQuantHandler}
            className={classes.detailAction_input}
          />
          <FontAwesomeIcon
            className={classes.detailAction_right}
            icon={faAngleRight}
            onClick={increaseQuant}
          />
        </div>
      </div>
      <button className={classes.detailAction_btn} onClick={addToCartHandler}>Add to cart</button>
    </div>
  );
}
