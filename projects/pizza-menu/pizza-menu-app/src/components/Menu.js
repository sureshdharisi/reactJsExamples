import Pizza from "./Pizza";
import "../index.css";
import { pizzaData } from "../testdata/data.js";
export function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2> Our menu</h2>
      
      {pizzas.length > 0 ? (
        // <> is the react fragment. This will be used to package multiple components(tags)
        <> 
        <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        stone oven, all organic, all delicious.
      </p>
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            return <Pizza item={pizza} key={pizza.name} />;
          })}
        </ul>
        </>
      ) : (
        <p>We are working on Pizza preparation</p>
      )}
    </main>
  );
}
