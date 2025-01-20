import React from "react";
import { Link } from "@inertiajs/react";

const ProjectAreaTwoItem = (props) => {
    return (
        <div className="project-item-two">
            <div className="project-thumb-two">
                <Link href={props.item.url}>
                    <img src={props.item.src} alt="" />
                </Link>
            </div>
            <div className="project-content-two">
                <h2 className="title">
                    <Link href={props.item.url}>{props.item.title}</Link>
                </h2>
                <span>{props.item.desc}</span>
            </div>
        </div>
    );
};

export default ProjectAreaTwoItem;
