import React from "react";

const HistoryAreaRoadmap = () => {
  return (
    <div className="history-roadmap-wrap">
      <div className="roadmap-line-shape">
        <span className="dot-one pulse-one"></span>
        <span className="dot-two pulse-two"></span>
      </div>

      <ul className="list-wrap">
        <li
          className="wow fadeInDown"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-three"></span>
          <div className="content">
            <h5 className="title">1980</h5>
            <p>Oprichting van Printvisie in Rotterdam</p>
          </div>
        </li>
        <li
          className="wow fadeInUp"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-four"></span>
          <div className="content">
            <h5 className="title">2009</h5>
            <p>Leander Wünschmann neemt het bedrijf over</p>
          </div>
        </li>
        <li
          className="wow fadeInDown"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-five"></span>
          <div className="content">
            <h5 className="title">2013</h5>
            <p>Lancering van de duurzame webshop Groenprint</p>
          </div>
        </li>
        <li
          className="wow fadeInUp"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-six"></span>
          <div className="content">
            <h5 className="title">2023</h5>
            <p>Integratie van ClimateCalc in de bestelsoftware</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HistoryAreaRoadmap;
