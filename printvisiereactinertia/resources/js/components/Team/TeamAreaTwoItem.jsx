import React from "react";
import { Link } from "@inertiajs/react";
import cn from "classnames";

const TeamAreaTwoItem = ({ item, className }) => {
    return (
        <div className={cn("team-item", className)}>
            <div className="team-thumb">
                <Link href={item.url}>
                    <img src={item.src} alt="" />
                </Link>
            </div>

            <div className="team-content">
                <h2 className="title">
                    <Link href={item.url}>{item.title}</Link>
                </h2>

                <span>{item.designation}</span>

                <div className="team-social">
                    <ul className="list-wrap">
                        <li>
                            <i>ASDAS</i>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeamAreaTwoItem;
