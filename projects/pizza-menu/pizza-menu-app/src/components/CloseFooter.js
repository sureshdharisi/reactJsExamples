import React from "react";
import "../index.css";
export function CloseFooter(props) {
  return (
    <div>
      <h3>
        <footer className="footer order">
          <div className="order">
            <p>
              We are happy to welcome you between {props.openHour}:00 and{" "}
              {props.closeHour}
              :00.
            </p>
          </div>
        </footer>
      </h3>
    </div>
  );
}
