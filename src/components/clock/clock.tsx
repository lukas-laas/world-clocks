import { toZonedTime, format } from "date-fns-tz";

type props = {
  timeZone: string;
  time: number;
};

export const Clock = ({ timeZone, time }: props) => {
  const zonedTime = toZonedTime(new Date(time), timeZone);
  const pattern = "HH:mm:ss";
  return (
    <div>
      <h2>{timeZone}</h2>
      <p>{format(zonedTime, pattern)}</p>
    </div>
  );
};
