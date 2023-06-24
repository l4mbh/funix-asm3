import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Outlet, json } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import Footer from "../components/layout/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "../components/home/ProductModal";
import { userActions } from "../store/userSlice";
import { cartActions } from "../store/cartSlice";
import Chat from "../components/chat/Chat";

export default function Root() {
  
  const modalShow = useSelector(state => state.modal.show);
  const modalItem = useSelector(state => state.modal.item);

  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('loggedUser')) {
      const user = JSON.parse(localStorage.getItem('loggedUser'));
      dispatch(userActions.onLogin(user));
    }

    if(localStorage.getItem('cart')) {
      dispatch(cartActions.preloadCart(JSON.parse(localStorage.getItem('cart'))))
    }
  }, [])

  return (
    <div>
      <MainNavigation />
      <Chat />
      {modalShow && <ProductModal modalItem={modalItem} />}
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
