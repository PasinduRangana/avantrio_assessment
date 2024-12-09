"use client"
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import { Container, Table, Button,Image } from 'react-bootstrap';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [hydrated, setHydrated] = useState(false);

  // Ensure the component is only rendered on the client side after hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (!hydrated) {
    return null; // or a loading spinner if you prefer
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Image</th>

                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Image src={item.thumbnail} rounded style={{ width: '50px', height: '50px' }} />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <Button variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
