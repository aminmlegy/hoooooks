import React, { useState } from "react";
import styled from "./input.module.css";
export default function AddItem({ AddNew }) {
  const [Addsaved, setAdd] = useState({
    name: "",
    rate: 0,
  });
  const setName = (e) => {
    const saved = e.target.value;
    setAdd((preveState) => {
      return { ...preveState, name: saved };
    });
  };
  const saveRate = (e) => {
    const rating = e.target.value;
    setAdd((preveState) => {
      return { ...preveState, rate: rating };
    });
  };
  const Addd = () => {
    AddNew(Addsaved);
  };
  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Add New Item'
          value={Addsaved.name}
          className={styled.inputAdd}
          onChange={setName}
        />
        <input
          type='number'
          placeholder='film rate'
          value={Addsaved.rate}
          onChange={saveRate}
        />
        <span className={styled.plus} onClick={Addd}>
          +
        </span>
      </div>
    </>
  );
}
