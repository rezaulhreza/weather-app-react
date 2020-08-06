import React from "react";
const api = {
  key: "834 adefb124939779388d6a4b07b0e08",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
  };

  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search.." />
        </div>
        <div className="location-box">
          <div className="location">New York,USA</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
