import axios from "axios";
import { useEffect, useState, createContext } from "react";
export const PizzasContext = createContext();

const dataPizzas = "./pizzas.json";

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await axios.get(dataPizzas);
      if (!response.status) {
        throw new Error("NO HAY DATA");
      }
      //setPizzas(response.data);
      const pizzasDB = response.data;
      setPizzas(pizzasDB.map((pizza) => ({ ...pizza, quantity: 0 })));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  console.log(pizzas);

  return (
    <PizzasContext.Provider value={{ pizzas, cart, setCart }}>
      {children}
    </PizzasContext.Provider>
  );
};
export default PizzasProvider;
