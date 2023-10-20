import CartElements from "../components/CartElement";
import CartTotal from "../components/CartTotal";
import Navbar from "../view/NavBar";


const CartContent = () => {
  return (
    <>
      
      
      <Navbar />

      <h1>Detalles del pedido</h1>

      <CartElements />
      <span className="cartTotal">

       <CartTotal />
      </span>

    </>
  );
};

export default CartContent;
