import React from "react";
import HistoryAreaRoadmap from "./HistoryAreaRoadmap";

const HistoryArea = () => {
  return (
    <section className="history-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title white-title text-center mb-45">
              <span className="sub-title">Ons Verhaal</span>
              <h2 className="title">De Geschiedenis van Printvisie</h2>
              <p>
                Printvisie is ontstaan vanuit een passie voor duurzaam en
                innovatief drukwerk. Al meer dan 20 jaar helpen wij bedrijven en
                organisaties hun ideeën tot leven te brengen door middel van
                hoogwaardige printoplossingen.
              </p>
            </div>
          </div>
        </div>
        <div className="history-inner">
          <div className="history-img">
            <img src="/img/images/history_img.jpg" alt="Over ons" />
          </div>
          <div className="row g-0 justify-content-end">
            <div className="col-lg-6">
              <div className="history-content">
                <h2 className="title">
                  Hoe Printvisie begon als een duurzame visie
                </h2>
                <p>
                  Printvisie werd opgericht met het idee om drukwerk niet alleen
                  toegankelijk te maken, maar ook duurzaam en milieuvriendelijk.
                  Door te investeren in de nieuwste technologieën en
                  samenwerkingen met betrouwbare partners, streven wij ernaar om
                  altijd de hoogste kwaliteit te leveren, terwijl we de impact
                  op het milieu minimaliseren.
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="far fa-check"></i>Duurzame materialen en
                    milieuvriendelijke productie
                  </li>
                  <li>
                    <i className="far fa-check"></i>Innovatieve oplossingen voor
                    elke printbehoefte
                  </li>
                  <li>
                    <i className="far fa-check"></i>Toegewijd aan het
                    overtreffen van klantverwachtingen
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <HistoryAreaRoadmap />
      </div>

    </section>
  );
};

export default HistoryArea;
