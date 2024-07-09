import { useEffect, useState } from "react";
import { Clock } from "../clock/clock";
import { AddTimeZone } from "../add-time-zone/add-time-zone";
import "./board.css";

export function Board() {
  const [timeZones, setTimeZones] = useState([
    "Europe/Stockholm",
    "Europe/Helsinki",
    "America/Los_Angeles",
  ]);

  const [date, setDate] = useState(new Date());

  const onFormData = (data: string) => {
    setTimeZones([...timeZones, data]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="clocks-section">
      <AddTimeZone onFormData={onFormData} />
      <div className="clocks-board">
        {timeZones.map((timeZone, i) => {
          return <Clock key={i} timeZone={timeZone} time={date}></Clock>;
        })}
      </div>
    </section>
  );
}
