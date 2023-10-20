import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const PizzasMenu = () => {
  const { pizzas, cart, setCart } = useContext(PizzasContext);

  //console.log(pizzas);

  const addPizzas = (pizza) => {
    //console.log(pizza);

    setCart([...cart, pizza]);
  };

  return (
    <div className="menu-pizza">
      <div className="gallery grid-columns-5 p-2">
        {pizzas.map((pizza, i) => (
          <Card className="menu-pizza" key={i}>
            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
            <Card.Title>{pizza.name}</Card.Title>
            <p>Ingredientes</p>
            <ul>
              <li>🍕 {pizza.ingredients[0]}</li>
              <li>🍕 {pizza.ingredients[1]}</li>
              <li>🍕 {pizza.ingredients[2]}</li>
              <li>🍕 {pizza.ingredients[3]}</li>
            </ul>
            <h5>Precio $ {pizza.price}</h5>
            <Link to={`/pizza/${pizza.id}`}>
              <Button variant="primary" className="detail-pizza p-1 m-1">
                🔍 Ver más
              </Button>
            </Link>
            <Button
              variant="success"
              className="add-pizza p-1 m-1"
              onClick={() => addPizzas(pizza)}
            >
              🛒 Agregar
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default PizzasMenu;
