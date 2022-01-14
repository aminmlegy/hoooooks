import React, { useState } from "react";
export default function Fillter({ vall }) {
  const [filter, setFilter] = useState("");
  const filtrate = (e) => {
    const val = e.target.value;
    setFilter(val);
    vall(val);
  };
  return (
    <>
      <input
        type='text'
        placeholder='fillter movies'
        value={filter}
        style={{
          width: "60%",
          height: "40px",
          padding: "5px",
          fontSize: "16px",
        }}
        onChange={filtrate}
      />
    </>
  );
}
