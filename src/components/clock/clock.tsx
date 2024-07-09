import { toZonedTime, format } from "date-fns-tz";
import "./clock.css";

type props = {
  timeZone: string;
  time: number;
};

export const Clock = ({ timeZone, time }: props) => {
  const zonedTime = toZonedTime(new Date(time), timeZone);
  const pattern = "HH:mm:ss";
  const city = timeZone.replace("_", " ").split("/");
  return (
    <div className="clock-wrapper">
      <h2>{city[1]}</h2>
      <p>{format(zonedTime, pattern)}</p>
    </div>
  );
};
