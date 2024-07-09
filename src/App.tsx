import { useEffect, useState } from "react";
import "./App.css";
import { Clock } from "./components/clock/clock";

function App() {
  const timeZones: string[] = ["Europe/Stockholm", "Europe/Helsinki"];
  const [date, setDate] = useState(new Date().getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1>World Clocks</h1>
      {timeZones.map((timeZone, i) => {
        return <Clock key={i} timeZone={timeZone} time={date}></Clock>;
      })}
    </>
  );
}

export default App;
