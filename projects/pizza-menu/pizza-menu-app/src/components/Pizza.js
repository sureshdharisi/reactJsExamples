import "../index.css";

// all the attributes are sending frm react components will mapped to pizza objects
/*
function Pizza(prop) {
  if (prop.item.soldOut) return null;
  return (
    <div className="pizza">
      <img src={prop.item.photoName} alt={prop.item.name}></img>
      <div>
        <h3>{prop.item.name}</h3>
        <p>{prop.item.ingredients}</p>
        <span>{prop.item.price}</span>
      </div>
    </div>
  );
}
*/
// Here we don't need to pass entire props object
// We can dstructure into object and use the object directly
function Pizza({ item }) {
  /*if (item.soldOut)
    return (
      <div className="pizza">
        <img className="soldOut" alt="Sold out" />
      </div>
    );*/
  return (
    <li className={`pizza ${item.soldOut? 'sold-out':''}`}>
      <img src={item.photoName} alt={item.name}></img>
      <div className="pizza">
        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>

        <span>{item.soldOut ? "SOLD OUT" : item.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
