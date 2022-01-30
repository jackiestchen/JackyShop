import React, { useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import Message from "../components/Message";

const CartScreen = () => {
  const { id } = useParams();

  const [searchParams] = useSearchParams();

  const qty = Number(searchParams.get("qty"));

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;


  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return <div>Cart</div>;
};

export default CartScreen;
