import React, { useState, useEffect } from "react";
export default function Fillter({ vall }) {
  const [filter, setFilter] = useState("");
  const [filterRate, setFilterRate] = useState(10);
  const filtrate = (e) => {
    const val = e.target.value;
    setFilter(val);
    vall(val);
  };
  const filterRatee = (e) => {
    const rating = e.target.value;
    setFilterRate(rating);
  };
  useEffect(() => {
    vall(filter, filterRate);
  }, [filter, filterRate]);
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
      <input type='number' value={filterRate} onChange={filterRatee} />
    </>
  );
}
