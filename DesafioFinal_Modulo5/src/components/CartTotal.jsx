import { PizzasContext } from "../context/PizzasContext";

import React, { useContext } from "react";
import Button from "react-bootstrap/Button";

const CartTotal = () => {
  const { cart } = useContext(PizzasContext);
  console.log(cart);
  const cartTotal = cart.reduce((acc, el) => acc + el.price, 0);

  //   console.log(cart.lenght);
  //   console.log(cartTotal);
  return (
    <>
      <div className="cartTotal">
        <Button variant="success" className="add-pizza p-1 m-1">
          <span> Ir a Pagar ${cartTotal}</span>
        </Button>
      </div>
    </>
  );
};

export default CartTotal;
