import React from "react";
import './cards.css'

export default function Cards({ children }) {
  return (
    <>
			<div className="cards">
				{children}
			</div>
		</>
  );
}
