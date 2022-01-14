import React from "react";
import styels from "./Styles.module.css";
export default function Listt({ pass, remoo }) {
  const remitem = (e, index) => {
    remoo(e, index);
  };
  const drawDom = () => {
    return pass.map((ele, ind) => (
      <div className={styels.list} key={ind}>
        <h3>{ele.name}</h3>
        <p>{ele.rate}</p>
        <span onClick={(e) => remitem(e, ind)}>x</span>
      </div>
    ));
  };
  return <div className={styels.container}>{drawDom()}</div>;
}
