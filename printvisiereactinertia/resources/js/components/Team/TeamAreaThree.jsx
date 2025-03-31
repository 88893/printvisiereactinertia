import React from "react";
import TeamAreaTwoItem from "./TeamAreaTwoItem";

const TeamAreaThree = ({ team_members }) => {
    return (
        <section className="team-area-two pt-110 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    {team_members.map((x, index) => (
                        <div
                            key={index}
                            className="col-lg-4 col-md-6 col-sm-10"
                        >
                            <TeamAreaTwoItem
                                item={x}
                                className="team-item-hover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamAreaThree;
