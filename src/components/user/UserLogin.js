import React, { useState } from "react";

import classes from "./UserLogin.module.css";
import Card from "../UI/Card";
import { Link, useSubmit } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submit = useSubmit();
  const dispatch = useDispatch();

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setError(null);

    let user = false;
    if (localStorage.getItem("userArr")) {
      user = JSON.parse(localStorage.getItem("userArr")).filter(
        (user) => user.email === email
      );
    }

    if (user) {
      if (user[0].password.trim() !== password.trim()) {
        setError("Email / Password is not right, please check again !");
        setPassword("");
        return;
      } else {
        submit(user[0], {
          action: "/login",
          method: "POST",
        });
        dispatch(userActions.onLogin(user[0]));
      }
    } else {
      setError("Email / Password is not right, please check again !");
      setPassword("");
      return;
    }

    if (error === null) {
      submit(user[0], {
        action: "/login",
        method: "POST",
      });
      dispatch(userActions.onLogin(user[0]));
    }
  };

  return (
    <div className={classes.userLogin}>
      <Card title="Sign in">
        {error && <div className="text-danger text-center">{error}</div>}
        <form onSubmit={formSubmitHandler} className={classes.userLogin_form}>
          <div className={classes.userLogin_formControl}>
            <input
              name="email"
              onChange={emailChangeHandler}
              value={email}
              className={classes.userLogin_usernameInput}
              type="text"
              placeholder="Email"
              required
            />
            <input
              name="password"
              onChange={passwordChangeHandler}
              value={password}
              className={classes.userLogin_passwordInput}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button className={classes.userLogin_btn}>Sign in</button>
        </form>
        <div className={classes.userLogin_text}>
          Create an account? <Link to="/register">Sign up</Link>
        </div>
      </Card>
    </div>
  );
}
