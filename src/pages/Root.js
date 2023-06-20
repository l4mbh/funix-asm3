import React from "react";
import { Container } from "react-bootstrap";
import { Outlet, json } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import Footer from "../components/layout/Footer";
import axios from "axios";

export default function Root() {
  return (
    <div>
      <MainNavigation />
      <Container className="mockContent">
        <Outlet />
      </Container>
      <Footer></Footer>
    </div>
  );
}

export const loader = async () => {
  const response = await axios.get(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  if(response.status !== 200) {
    throw json({message : 'Could not get products !'}, {status : 500});
  }

  return response.data;
};
