import React from "react";

import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <Link to={`detail/${props.item._id.$oid}`}>
      <div className={`${classes.product_item} image-fluid`}>
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
    </Link>
  );
}
