import React from "react";
import "./buttons.style.css";

export function Buttons({ className, children, onClick }) {
   return (
      <button className={className} onClick={onClick}>
         {children}
      </button>
   );
}
