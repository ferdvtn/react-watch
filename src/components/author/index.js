import React, { useEffect, useState } from "react";
import "./author.scss";

const Author = () => {
  const [maker, setMaker] = useState("...");

  useEffect(() => {
    const listMaker = ["Love", "React Js", "Passion", "More.."];
    let counter = 0;
    setInterval(() => {
      if (counter === listMaker.length - 1) {
        counter = 0;
      } else {
        counter++;
      }

      setMaker(listMaker[counter]);
    }, 2000);
  }, []);
  return (
    <div className="author">
      Made with{" "}
      <b>
        <u>#{maker}</u>
      </b>
      <br />
      <a className="author-link" href="https://github.com/ferdvtn" target="_blank" rel="noreferrer">
        by Ferdian
      </a>
    </div>
  );
};

export default Author;
