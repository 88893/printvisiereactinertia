import React from "react";
import HistoryAreaRoadmap from "./HistoryAreaRoadmap";

const HistoryArea = ( { sectionTitle, title, description, imageUrl, imageAlt, contentTitle, contentText, listItems = [], roadmapItems=[], shape1Url, shape2Url } ) => {
  return (
    <section className="history-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="text-center section-title white-title mb-45">
              <span className="sub-title">{sectionTitle}</span>
              <h2 className="title">{title}</h2>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="history-inner">
          <div className="history-img">
          <img src={imageUrl} alt={imageAlt} />
          </div>
          <div className="row g-0 justify-content-end">
            <div className="col-lg-6">
              <div className="history-content">
                <h2 className="title">
                  {contentTitle}
                </h2>
                <p>
                  {contentText}
                </p>
                <ul className="list-wrap">
                  {listItems.map((item, index) => (
                    <li key={index}>
                      <i className="far fa-check"></i>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <HistoryAreaRoadmap roadmapItems={roadmapItems}/>
      </div>

      <div className="history-shape-wrap">
        <img src={shape1Url} alt="Vorm 1" />
        <img src={shape2Url} alt="Vorm 2" />
      </div>
    </section>
  );
};

export default HistoryArea;
