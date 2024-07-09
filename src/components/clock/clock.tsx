import { toZonedTime, format } from "date-fns-tz";
import "./clock.css";

type Props = {
  timeZone: string;
  time: Date;
};

export const Clock = ({ timeZone, time }: Props) => {
  const zonedTime = toZonedTime(time, timeZone);
  const pattern = "HH:mm:ss";
  const city = timeZone.replace("_", " ").split("/")[1];
  return (
    <div className="clock-wrapper">
      <h2>{city}</h2>
      <p>{format(zonedTime, pattern)}</p>
    </div>
  );
};
