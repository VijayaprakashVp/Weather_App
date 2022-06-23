import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Weather } from "./Components/Weather";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Heading>The Weather App</Heading>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
