import React from "react";

import classes from "./CheckoutForm.module.css";

import { useSelector } from "react-redux";

export default function CheckoutForm() {
  const user = useSelector((state) => state.user);

  return (
    <div className={classes.checkout_form}>
      <div className={classes.checkout_formControl}>
        <label className={classes.checkout_formLabel}>Full name :</label>
        <input
          className={classes.checkout_formInput}
          type="text"
          placeholder="Enter your fullname here !"
          defaultValue={user.isLogin ? user.userInfo.name : ""}
          required
        />
      </div>
      <div className={classes.checkout_formControl}>
        <label className={classes.checkout_formLabel}>Email :</label>
        <input
          className={classes.checkout_formInput}
          type="email"
          placeholder="Enter your email here !"
          defaultValue={user.isLogin ? user.userInfo.email : ""}
          required
        />
      </div>
      <div className={classes.checkout_formControl}>
        <label className={classes.checkout_formLabel}>Phone :</label>
        <input
          className={classes.checkout_formInput}
          type="text"
          placeholder="Enter your phone here !"
          defaultValue={user.isLogin ? user.userInfo.phone : ""}
          required
        />
      </div>
      <div className={classes.checkout_formControl}>
        <label className={classes.checkout_formLabel}>Address :</label>
        <input
          className={classes.checkout_formInput}
          type="text"
          placeholder="Enter your address here !"
          required
        />
      </div>
      <button className={classes.checkout_formBtn}>Place order</button>
    </div>
  );
}
