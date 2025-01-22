import React from "react";
import TeamAreaTwoItem from "./TeamAreaTwoItem";

const TeamAreaThree = () => {
  const team_members = [
    {
      src: "/img/team/dennise.png",
      // url: "/team-details",
      title: "Dennis den Engelsman",
      designation: "Bedrijfsleider / Calculator",
    },
    {
      src: "/img/team/henks.png",
      // url: "/team-details",
      title: "Henk Sint",
      designation: "Calculator",
    },
    {
      src: "/img/team/faruky.png",
      // url: "/team-details",
      title: "Faruk Yildiz",
      designation: "Verkoop",
    },
    {
      src: "/img/team/rogierk.png",
      // url: "/team-details",
      title: "Rogier Kloos",
      designation: "Orderbegeleider",
    },
    {
      src: "/img/team/stefans.png",
      // url: "/team-details",
      title: "Stefan Schippers",
      designation: "Bestandscontrole",
    },
    {
      src: "/img/team/hansr.png",
      // url: "/team-details",
      title: "Hans van Reek",
      designation: "Offset drukker",
    },
    {
      src: "/img/team/richarda.png",
      // url: "/team-details",
      title: "Richard Andressen",
      designation: "Offset drukker",
    },
    {
      src: "/img/team/gregorys.png",
      // url: "/team-details",
      title: "Gregory Stekkel",
      designation: "Digitale drukker",
    },
    {
      src: "/img/team/willemh.png",
      // url: "/team-details",
      title: "Willem van der Ham",
      designation: "Nabewerker",
    },
    {
      src: "/img/team/dennisl.png",
      // url: "/team-details",
      title: "Dennis van Leeuwen",
      designation: "Nabewerker",
    },
    {
      src: "/img/team/marvinb.png",
      // url: "/team-details",
      title: "Marvin Bhagola",
      designation: "Nabewerker",
    },
    {
      src: "/img/team/patrickl.png",
      // url: "/team-details",
      title: "Patrick Lima-Rocha",
      designation: "Nabewerker",
    },
  ];

  return (
    <section className="team-area-two pt-110 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          {team_members.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <TeamAreaTwoItem item={x} className="team-item-hover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAreaThree;
