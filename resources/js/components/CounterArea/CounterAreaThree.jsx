import React from "react";
import CounterAreaThreeItem from "./CounterAreaThreeItem";

const CounterAreaThree = ({ title, description, counter_items = [], customer_items = [] }) => {
    return (
        <section className="counter-area-three">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-0 order-lg-2">
                        <div className="counter-item-wrap-three">
                            <ul className="list-wrap">
                                {counter_items.map((x, index) => (
                                    <li key={index}>
                                        <CounterAreaThreeItem
                                            item={x}
                                            amount={1 + (3 + index)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="counter-content-three">
                            <div className="section-title title-style-two mb-30">
                                <h2 className="title">
                                    {title}
                                </h2>
                            </div>
                            <p>
                                {description}
                            </p>
                            <div
                                className="content-bottom"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                }}
                            >
                                {customer_items.map((item, index) => (
                                    <div style={{ textAlign: "center" }} key={index}>
                                        <span
                                            style={{
                                                fontSize: "36px",
                                                fontWeight: "bold",
                                                color: "#e4047c",
                                            }}
                                        >
                                           {item.percentage}
                                        </span>
                                        <p
                                            style={{
                                                fontSize: "16px",
                                                color: "#e4047c",
                                            }}
                                        >
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterAreaThree;
