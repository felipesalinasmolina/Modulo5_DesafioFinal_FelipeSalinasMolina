import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartTotal from "../components/CartTotal";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary p-3">
        <Container>
          <Link className="home" to={"/"}>
            🍕 Pizzería Mamma Mia!!
          </Link>
          <Link className="seeCart" to={"/shoppingCart"}>
            🛒 <CartTotal />
          </Link>
        </Container>
        <header>
          <h1>¡Pizzería Mamma Mia !</h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar</p>
        </header>
      </Navbar>
    </>
  );
};

export default NavBar;
