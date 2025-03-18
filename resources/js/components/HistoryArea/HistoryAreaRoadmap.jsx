import React from "react";

const HistoryAreaRoadmap = ({ roadmapItems }) => {
  const pulseClasses = ['pulse-three', 'pulse-four', 'pulse-five', 'pulse-six'];

  return (
    <div className="history-roadmap-wrap">
      <div className="roadmap-line-shape">
        <span className="dot-one pulse-one"></span>
        <span className="dot-two pulse-two"></span>
      </div>

      <ul className="list-wrap">
        {roadmapItems.map((item, index) => (
          <li
            key={index}
            className={`wow ${index % 2 === 0 ? 'fadeInDown' : 'fadeInUp'}`}
            data-wow-delay=".2s"
            data-wow-duration="1.5s"
          >
            <span className={`dot ${pulseClasses[index % pulseClasses.length]}`}></span>
            <div className="content">
              <h5 className="title">{item.year}</h5>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryAreaRoadmap;