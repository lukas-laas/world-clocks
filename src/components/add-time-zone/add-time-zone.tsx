import { useState } from "react";
import "./add-time-zone.css";

export function AddTimeZone({
  onFormData,
}: {
  onFormData: (data: string) => void;
}) {
  const [input, setInput] = useState<string>("");
  function handleClick() {
    onFormData(input);
  }

  return (
    <form className="time-zone-form" action="">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="IANA time zone"
      />
      <button type="button" onClick={() => handleClick()}>
        Add time zone
      </button>
    </form>
  );
}
