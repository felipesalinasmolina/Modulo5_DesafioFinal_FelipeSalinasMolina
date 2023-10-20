import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";
import NavBar from "../view/NavBar";

const CardPizzaDetail = () => {
  const { pizzas, cart, setCart } = useContext(PizzasContext);
  //console.log(pizzas);

  const { id } = useParams();

  const detailPizza = pizzas.filter((pizza) => pizza.id === id);

  //console.log(detailPizza);

  const addPizzas = (pizza) => {
    // console.log(pizza);
    setCart([...cart, pizza]);
  };
  // }
  return (
    <>
      <NavBar />
      <Card className="card-pizza-detail">
        {detailPizza.map((pizza, i) => (
          <div className="carta" key={i}>
            <Card className="container-cardpizza">
              <Card>
                <Card.Img
                  variant="top"
                  src={pizza.img}
                  alt={pizza.name}
                  style={{ height: "27rem" }}
                />
              </Card>

              <Card style={{ width: "45rem" }}>
                <Card.Title>Pizza {pizza.name}</Card.Title>
                <Card.Body>
                  <Card.Text>{pizza.desc}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <p>Ingredientes</p>
                  <ul>
                    <li>🍕 {pizza.ingredients[0]}</li>
                    <li>🍕 {pizza.ingredients[1]}</li>
                    <li>🍕 {pizza.ingredients[2]}</li>
                    <li>🍕 {pizza.ingredients[3]}</li>
                  </ul>
                </ListGroup>
                <Card.Body>
                  <Card.Text>Precio $ {pizza.price}</Card.Text>
                  <Button
                    variant="success"
                    className="add-pizza p-1 m-1"
                    onClick={() => addPizzas(pizza)}
                  >
                    Agregar al Carrito
                  </Button>
                </Card.Body>
              </Card>
            </Card>
          </div>
        ))}
      </Card>
    </>
  );
};

export default CardPizzaDetail;
