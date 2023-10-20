import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Card from "react-bootstrap/Card";


const NotFound = () => {
  return (
    <>
      <NavBar />

      <Card className="notfound-card">
        <Link className="home" to={"/"}>
          <Button variant="success" className="add-pizza p-1 m-1">
            <span> Volver al Menú</span>
          </Button>
        </Link>
        <Card.Img
          src="https://previews.123rf.com/images/kongvector/kongvector2005/kongvector200515569/147808628-cara-sombr%C3%ADa-de-rebanada-de-personaje-de-dibujos-animados-de-pizza-con-404-tableros-ilustraci%C3%B3n.jpg"
          alt="Pizza Not Found"
          width={"500rem"}
          height={"700rem"}
        />
      </Card>
    </>
  );
};

export default NotFound;
