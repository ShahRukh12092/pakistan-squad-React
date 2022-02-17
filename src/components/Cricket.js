import React, { useState } from "react";
import "./style.css";
import Data from "./Api";
import Card from "./Card";
import Navbr from "./Navbr";

const categories = [
  ...new Set(
    Data.map((item) => {
      return item.category;
    })
  ),
  "All",
];

console.log(categories);

function Cricket() {
  const [data, setdata] = useState(Data);
  //console.log(data);

  const [items, setitems] = useState(categories);
  //console.log(data);

  const filterItem = (sel) => {
    if (sel === "All") {
      setdata(Data);
      return;
    }
    const newlist = Data.filter((item) => {
      return item.category === sel;
    });
    //console.log(newlist);
    setdata(newlist);
    //console.log(data);
  };

  return (
    <>
      <Navbr filterItem={filterItem} categories={categories} />
      <Card data={data} />
    </>
  );
}

export default Cricket;
