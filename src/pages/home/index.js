import Aos from "aos";
import React, { useEffect, useState } from "react";
import Author from "../../components/author";
import Contact from "../../components/contact";
import "./home.scss";

const pad = (str, max = 2) => {
  return str.toString().length < max ? pad("0" + str, max) : str;
};

const Home = () => {
  const today = new Date();
  const [second, setSecond] = useState(pad(today.getSeconds() + 1));
  const [minute, setMinute] = useState(pad(today.getMinutes()));
  const [hour, setHour] = useState(pad(today.getHours()));

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    const secondInt = setInterval(() => {
      const today = new Date();
      setSecond(pad(today.getSeconds() + 1));
      setMinute(pad(today.getMinutes()));
      setHour(pad(today.getHours()));
    }, 1000);

    // clearing interval
    return () => clearInterval(secondInt);
  }, [second]);

  return (
    <div className="container">
      <div id="watch-hour" className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col-4 col-md-3" data-aos="fade-up" data-aos-delay="400">
            <section className="sec-1 border shadow rounded">{hour}</section>
          </div>
          <div className="col-4 col-md-3" data-aos="fade-up" data-aos-delay="600">
            <section className="sec-2 border shadow rounded">{minute}</section>
          </div>
          <div className="col-4 col-md-3" data-aos="fade-up" data-aos-delay="800">
            <section className="sec-3 border shadow rounded">{second}</section>
          </div>
          <div className="col-12 col-md-3" data-aos="fade-up" data-aos-delay="1000">
            <Author />
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
