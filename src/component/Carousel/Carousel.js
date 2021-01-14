import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import business from "../../assets/images/business.jpg";
import deal from "../../assets/images/deal.png";

export default function Carousels(props) {
  var items = [
    {
      name: "Random Name #1",
      img: `${business}`,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      img: `${deal}`,
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  // console.log(props);
  return (
    <Paper>
      <img width="100%" height="500px" src={props.item.img} alt="imageCaro" />
      <h2 style={{ textAlign: "center" }}>{props.item.name}</h2>
      <p style={{ textAlign: "center" }}>{props.item.description}</p>
    </Paper>
  );
}
