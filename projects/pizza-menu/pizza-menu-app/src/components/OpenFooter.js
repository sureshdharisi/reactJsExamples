import React from "react";
import "../index.css";
export function OpenFooter(props) {
  return (
    <div>
      <h3>
        <footer className="footer order">
          <div className="order">
            <p>
              We are Open untle {props.closeHour}:00. Come visit us or order
              online
            </p>
            <button className="btn">Order</button>
          </div>
        </footer>
      </h3>
    </div>
  );
}
