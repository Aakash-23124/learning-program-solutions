import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const flights = [
    { id: 1, name: "Flight A1", time: "10:00 AM" },
    { id: 2, name: "Flight B2", time: "12:30 PM" },
    { id: 3, name: "Flight C3", time: "5:45 PM" },
  ];

  const handleBooking = (flightName) => {
    alert(`Ticket booked for ${flightName}`);
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "20px" }}>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      <hr />

      {!isLoggedIn ? (
        <div>
          <h2>Guest Page - Browse Flights</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {flights.map((flight) => (
              <li key={flight.id} style={{ margin: "10px 0" }}>
                {flight.name} - {flight.time}
              </li>
            ))}
          </ul>
          <p><b>Login to book tickets!</b></p>
        </div>
      ) : (
        <div>
          <h2>User Page - Book Flights</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {flights.map((flight) => (
              <li key={flight.id} style={{ margin: "10px 0" }}>
                {flight.name} - {flight.time}{" "}
                <button onClick={() => handleBooking(flight.name)}>Book</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
