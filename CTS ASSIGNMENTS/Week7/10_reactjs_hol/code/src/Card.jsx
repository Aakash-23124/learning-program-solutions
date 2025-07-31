import React from 'react';

function Card({ item }) {
  const { title, imgSrc, name, rent, address } = item;

  return (
    <div style={{
      width: "500px",
      boxShadow: "0 4px 8px grey",
      padding: "15px",
      margin: "20px auto"
    }}>
      <h4>{title}</h4>
      <img src={imgSrc} alt={name} style={{ width: "100%", height: "auto" }} />
      <h5><strong>Name:</strong> {name}</h5>
      <h5 style={{ color: rent < 60000 ? 'red' : 'green' }}>
        <strong>Rent:</strong> Rs. {rent}
      </h5>
      <h5><strong>Address:</strong> {address}</h5>
    </div>
  );
}

export default Card;
