import React, { useEffect, useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import ShopNavbar from "../components/shop/ShopNavbar/ShopNavbar";
import ShopProducts from "../components/shop/ShopProducts/ShopProducts";
import { useRouteLoaderData } from "react-router-dom";

export default function Shop() {

  const [category, setCategory] = useState('all');
  const [filterProds, setFilterProds] = useState([]);

  const data = useRouteLoaderData('root');

  const changeCategoryHandler = (cate) => {
    setCategory(cate);
  }

  useEffect(() => {
    if( category === 'all') {
      setFilterProds(data);
    } else {
      const filteredByCate = data.filter(prod => prod.category === category);
      setFilterProds(filteredByCate);
    }
  }, 
  [category, data])

  return (
    <div>
      <PageHeader text="SHOP" />
      <Container fluid >
        <Row>
          <Col md={3}>
            <ShopNavbar category={category} onChangeCate={changeCategoryHandler} />
          </Col>
          <Col md={9}>
            <ShopProducts products={filterProds} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
