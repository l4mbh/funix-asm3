import React from "react";

import classes from "./ProductCategory.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProductCategory() {
  const navigate = useNavigate();

  return (
    <div className={classes.prodCategory_wrapper}>
      <div className={classes.prodCategory_text}>
        <span className={classes.prodCategory_subText}>Carefully Created Collections</span>
        <h2 className={classes.prodCategory_title}>Browse Our Categories</h2>
      </div>
      <div className={classes.prodCateodry_list1}>
        <Container fluid>
          <Row>
            <Col>
              <div
                className={`${classes.prodCategory_item} ${classes.item1}`}
                onClick={() => {
                  navigate("shop");
                }}
              ></div>
            </Col>
            <Col>
              <div
                className={`${classes.prodCategory_item} ${classes.item2}`}
                onClick={() => {
                  navigate("shop");
                }}
              ></div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div
                className={`${classes.prodCategory_item} ${classes.item3}`}
                onClick={() => {
                  navigate("shop");
                }}
              ></div>
            </Col>
            <Col>
              <div
                className={`${classes.prodCategory_item} ${classes.item4}`}
                onClick={() => {
                  navigate("shop");
                }}
              ></div>
            </Col>
            <Col>
              <div
                className={`${classes.prodCategory_item} ${classes.item5}`}
                onClick={() => {
                  navigate("shop");
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={classes.prodCateodry_list2}></div>
    </div>
  );
}
