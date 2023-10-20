import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import Button from "react-bootstrap/Button";
import React from "react";

const CartElements = () => {
  const { cart, setCart } = useContext(PizzasContext);

  const addPizzas = (pizza) => {
    console.log(pizza);
    setCart([...cart, pizza]);
  };
  console.log(cart);
  return cart.map((pizza, i) => {
    return (
      <div className="cartContent" key={i}>
        <div className="a">
          <img className="imagePizza" src={pizza.img} alt={pizza.name} />
          <h3 className="name">Pizza {pizza.name}</h3>
        </div>
        <div className="total-pizza">
          <Button variant="success" onClick={() => addPizzas(pizza)}>
            {" "}
            ➕{" "}
          </Button>
          <h4 className="price">$ {pizza.price}</h4>
          <Button variant="warning">➖</Button>
        </div>
      </div>
    );
  });
};

export default CartElements;
