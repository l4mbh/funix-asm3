import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default class MainNavigation extends Component {
  render() {
    return (
      <Container className="sticky-top" style={{ backgroundColor: "white" }}>
        <Container fluid>
          <nav className={classes.main_nav}>
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
                <Link to="/">LBH Store</Link>
              </h1>
            </div>
            <ul className={classes.nav_list}>
              <li className={classes.nav_item}>
                <NavLink
                  to="cart"
                  className={({ isActive }) =>
                    isActive ? `${classes.active}` : undefined
                  }
                >
                  <FontAwesomeIcon
                    className={classes.link_icon}
                    icon={faCartShopping}
                  />
                  Cart
                </NavLink>
              </li>
              <li className={classes.nav_item}>
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
              </li>
            </ul>
          </nav>
        </Container>
      </Container>
    );
  }
}
