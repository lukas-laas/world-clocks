import { useEffect, useState } from "react";
import { Clock } from "../clock/clock";

export function Board() {
  const timeZones: string[] = [
    "Europe/Stockholm",
    "Europe/Helsinki",
    "America/Los_Angeles",
  ];
  const [date, setDate] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {timeZones.map((timeZone, i) => {
        return <Clock key={i} timeZone={timeZone} time={date}></Clock>;
      })}
    </>
  );
}
