import React from "react";
import { Link } from "@inertiajs/react";

const BlogAreaItem = (props) => {
    return (
        <div className="blog-post-item">
            <div className="blog-post-thumb">
                <Link href="/blog-details">
                    <img src={props.item.src} alt="" />
                </Link>
            </div>
            <div className="blog-post-content">
                <Link href="/blog" className="tag">
                    {props.item.tag}
                </Link>
                <h2 className="title">
                    <Link href="/blog-details">{props.item.title}</Link>
                </h2>
                <div className="blog-meta">
                    <ul className="list-wrap">
                        <li className="avatar-img">
                            <Link href="/blog">
                                <img src={props.item.author_img} alt="" />
                            </Link>
                        </li>
                        <li>
                            By{" "}
                            <Link href="/blog">{props.item.author_name}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogAreaItem;
