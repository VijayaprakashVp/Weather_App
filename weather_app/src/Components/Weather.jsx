import React from "react";

export const Weather = () => {
  const [city, setCity] = useState("");

  const handleRequest = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0b508144c618aa53e1bc61046fe2362`)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      Enter City :
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <button onClick={handleRequest}>Submit</button>
    </div>
  );
};
