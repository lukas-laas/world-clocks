export function AddTimeZone({ onFormData }) {
  return (
    <form action="">
      <input type="text" />
      <button
        type="button"
        onClick={() => onFormData("America/New_York")}
      ></button>
    </form>
  );
}
