import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductDetailImages from "./ProductDetailImages";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailAction from "./ProductDetailAction";
import ProductDetailDesc from "./ProductDetailDesc";
import RelatedProductList from "./RelatedProductList";

export default function ProductDetail({ product, relatedProducts }) {

  let imgList = {
    img1: product.img1,
    img2: product.img2,
    img3: product.img3,
    img4: product.img4,
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col>
          <ProductDetailImages images={imgList}/>
        </Col>
        <Col>
          <ProductDetailInfo product={product}/>
          <ProductDetailAction cartItem={product}/>
        </Col>
      </Row>
      <ProductDetailDesc description={product.long_desc} />
      {
        relatedProducts.length > 0 && <RelatedProductList products={relatedProducts}/>
      }

    </Container>
  );
}
