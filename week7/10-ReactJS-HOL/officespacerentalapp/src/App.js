
import React from "react";

function App() {
  const heading = "Office Space Rental Portal";

  const officeList = [
    {
      name: "Indigo Workspace",
      rent: 45000,
      address: "Koramangala, Bangalore",
      image: "https://via.placeholder.com/200?text=Indigo+Office",
    },
    {
      name: "WeWork Hub",
      rent: 75000,
      address: "Powai, Mumbai",
      image: "https://via.placeholder.com/200?text=WeWork+Office",
    },
    {
      name: "CoworkZone",
      rent: 60000,
      address: "Baner, Pune",
      image: "https://via.placeholder.com/200?text=CoworkZone+Office",
    },
  ];

  const getRentStyle = (rent) => ({
    color: rent < 60000 ? "red" : "green",
    fontWeight: "bold",
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{heading}</h1>

      {officeList.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "15px 0",
            borderRadius: "10px",
          }}
        >
          <img src={office.image} alt={office.name} width="200" />
          <h2>{office.name}</h2>
          <p>
            <strong>Rent: </strong>
            <span style={getRentStyle(office.rent)}>{office.rent}</span>
          </p>
          <p>
            <strong>Address:</strong> {office.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
