import React from "react";
import ProductItem from "./ProductItem";
import { Col, Container, Row } from "react-bootstrap";

import classes from './ProductList.module.css'

export default function ProductList(props) {
  return (
    <Container className="pt-3" fluid>
    <div className={classes.product_list_header}>
      <span className={classes.product_list_subText}>
        Made the hard way
      </span>
      <h2 className={classes.product_list_title}>
        Top  trending products
      </h2>
    </div>
      <Row>
        {props.products.map((product) => (
          <Col xs={12} sm={6} md={3} key={product._id.$oid} >
            <ProductItem item={product}  />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
