import { useState } from "react";
import { Key } from "./Key";

const Keypad = () => {
  const [number, setNumber] = useState("");
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "x", "0", "b"];

  const onAdd = (num) => {
    if (number.length === 10) return alert("max is 10 digits");
    setNumber(number + num);
  };
  const onClear = () => setNumber("");
  const onBack = () => {
    if (+number.length === 0) return alert("no digits left");
    setNumber(number.slice(0, -1));
  };

  return (
    <div>
      <div
        className="card text-bg-light mb-3"
        style={{ maxWidth: "13rem", padding: "0rem" }}
      >
        <div className="card-header">{number}</div>
        <div className="card-body">
          <div className="button">
            {keys.map((i) => (
              <Key
                value={i}
                action={i == "x" ? onClear : i == "b" ? onBack : () => onAdd(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypad;
