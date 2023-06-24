import React from "react";
import { Link, NavLink, useSubmit } from "react-router-dom";

import classes from "./MainNavigation.module.css";

import { Button, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faCartShopping,
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";

export default function MainNavigation() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const userInfo = useSelector((state) => state.user.userInfo);
  const cartQuant = useSelector(state => state.cart.cartQuant);


  const submit = useSubmit();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userActions.onLogout());
    submit(null, { action: "/logout", method: "POST" });
  };

  return (
    <Container
      fluid
      className="sticky-top"
      style={{ backgroundColor: "white" }}
    >
      <Container>
        <nav className={`${classes.main_nav} px-3`}>
          <ul className={classes.nav_list}>
            <li className={classes.nav_item}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className={classes.nav_item}>
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : undefined
                }
              >
                Shop
              </NavLink>
            </li>
          </ul>
          <div className={classes.nav_brand}>
            <h1 className={classes.nav_brandText}>
              <Link to="/">Boutique</Link>
            </h1>
          </div>
          <ul className={classes.nav_list}>
            <li className={`${classes.nav_item} ${classes.nav_cartIcon}`}>
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : undefined
                }
              >
                <FontAwesomeIcon
                  className={`${classes.link_icon}`}
                  icon={faCartShopping}
                ></FontAwesomeIcon>
                <span className={classes.nav_cartQuant}>{cartQuant}</span>
                Cart
              </NavLink>
            </li>
            {isLogin && (
              <li className={classes.nav_item}>
                <div>
                  <FontAwesomeIcon
                    className={classes.link_icon}
                    icon={faUser}
                  />
                  {userInfo.name}
                </div>
              </li>
            )}
            <li className={classes.nav_item}>
              {!isLogin ? (
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    isActive ? `${classes.active}` : undefined
                  }
                >
                  <FontAwesomeIcon
                    className={classes.link_icon}
                    icon={faRightToBracket}
                  />
                  Login
                </NavLink>
              ) : (
                <a className="text-danger" onClick={logoutHandler}>
                  <FontAwesomeIcon
                    className={classes.link_icon}
                    icon={faArrowRightFromBracket}
                  />
                  Logout
                </a>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </Container>
  );
}
