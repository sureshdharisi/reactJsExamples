import React from "react";
import "../index.css";
import { OpenFooter } from "./OpenFooter";
import { CloseFooter } from "./CloseFooter";
export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 16;
  const isOpen = hour > openHour && hour < closeHour;
 // const isOpenStr = hour > openHour && hour < closeHour ? "Open" : "Closed";

  //return (<div><h3><footer className="footer order">{hour}. We are currently {isOpenStr}!</footer></h3></div>);
  // short circuting operation
  /*return (
    <div>
      <h3>
        <footer className="footer order">
          
          {isOpen && (
            <div className="order">
              <p>
                We are Open untle {closeHour}:00. Come visit us or order online
              </p>
              <button className="btn">Order</button>
            </div>
          )}
        </footer>
      </h3>
    </div>
  );*/

  // Ternary Operator
  /*return (
    <div>
      <h3>
        <footer className="footer order">
          {isOpen ? (
            <div className="order">
              <p>
                We are Open untle {closeHour}:00. Come visit us or order online
              </p>
              <button className="btn">Order</button>
            </div>
          ) : (
            <p>
              We are happy to welcome you between {openHour}:00 and {closeHour}
              :00.
            </p>
          )}
        </footer>
      </h3>
    </div>
  );*/

  // conditional returns:

  if (isOpen) {
    return <OpenFooter openHour={openHour} closeHour={closeHour} />;
  } else {
    return <CloseFooter openHour={openHour} closeHour={closeHour} />;
  }
  //return React.createElement('footer',null,"We are currently open!");
}
