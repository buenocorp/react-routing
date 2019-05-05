/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  // eslint-disable-next-line no-use-before-define
  }, []);

  const [item, setItem] = useState({
      images:{}
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`
    );

    const item = await data.json();
    setItem(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparent} alt=""></img>
    </div>
  );
}

export default ItemDetail;
