import React, { useState } from "react";
import AddItem from "../addItm/AddItem";
import Fillter from "../Filtter/Fillter";
import Listt from "../ListData/Listt";
export default function Data() {
  const [data, setData] = useState([
    {
      name: "The Amazing Spider-Man",
      rate: 7,
    },
    {
      name: "The Unforgivable",
      rate: 8,
    },
    {
      name: "Don't Look Up",
      rate: 9,
    },
    {
      name: "Suicide Squad",
      rate: 10,
    },
    {
      name: "Man on Fire",
      rate: 10,
    },
  ]);
  const [valu, setValu] = useState({ name: "", rate: 10 });
  const inputVal = (name, rate) => {
    setValu((prevee) => {
      return { ...prevee, name: name, rate: rate };
    });
  };
  const AddNewData = (NewObj) => {
    setData((prev) => [...prev, NewObj]);
  };
  const chec = () => {
    if (valu.length !== 0) {
      return data.filter(
        (ele) =>
          ele.name.toLowerCase().includes(valu.name.toLocaleLowerCase()) &&
          ele.rate <= valu.rate
      );
    } else {
      return data;
    }
  };
  const removing = (e, index) => {
    setData((preveState) => {
      return preveState.filter((ele, idex) => {
        return idex !== index;
      });
    });
  };
  return (
    <>
      <AddItem AddNew={AddNewData} />
      <Fillter vall={inputVal} />
      <Listt pass={chec()} remoo={removing} />
    </>
  );
}
