import React from "react";

import classes from "./ProductItem.module.css";
import { modalActions } from "../../store/modalSlice";
import { useDispatch } from "react-redux";

export default function ProductItem(props) {
  const dispatch = useDispatch();

  const callModal = () => {
    dispatch(modalActions.showModal(props.item));
  };

  return (
    <div className={`${classes.product_item} image-fluid`} onClick={callModal}>
      <div
        className={classes.product_img}
        style={{ backgroundImage: `url(${props.item.img1})` }}
      ></div>
      <div className={classes.product_name}>{props.item.name}</div>
      <div className={classes.product_price}>
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(props.item.price)}
      </div>
    </div>
  );
}
