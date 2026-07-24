function App() {
  const element = "Office Space";

  const image =
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500";

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Bangalore",
    },
    {
      Name: "Regus",
      Rent: 55000,
      Address: "Hyderabad",
    },
  ];

  return (
    <div style={{ margin: "40px" }}>
      <h1>{element}, at Affordable Range</h1>

      {offices.map((item, index) => {
        let rentColor;

        if (item.Rent <= 60000) {
          rentColor = "red";
        } else {
          rentColor = "green";
        }

        return (
          <div key={index} style={{ marginBottom: "40px" }}>
            <img
              src={image}
              width="250"
              height="200"
              alt="Office Space"
            />

            <h1>Name: {item.Name}</h1>

            <h3 style={{ color: rentColor }}>
              Rent: Rs. {item.Rent}
            </h3>

            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
