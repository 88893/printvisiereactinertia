import React from "react";
import CounterAreaThreeItem from "./CounterAreaThreeItem";

const CounterAreaThree = () => {
    const counter_items = [
        {
            src: "/img/icon/inner_counter_icon01.png",
            titles: ["Tevreden", "Klanten"], // Over tevreden klanten
        },
        {
            src: "/img/icon/inner_counter_icon02.png",
            titles: ["Afgeronde", "Projecten"], // Voor het aantal succesvolle projecten
        },
        {
            src: "/img/icon/inner_counter_icon03.png",
            titles: ["Toegewijde", "Werknemers"], // Voor de medewerkers
        },
        {
            src: "/img/icon/inner_counter_icon04.png",
            titles: ["Milieuvriendelijk", "Materiaal"], // Voor hun duurzaamheid en erkenningen
        },
    ];

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
                                    Duurzaam Drukwerk voor een Betere Toekomst
                                </h2>
                            </div>
                            <p>
                                Bij Printvisie Rotterdam geloven we in duurzaam
                                drukwerk. Ons doel is om bedrijven en
                                organisaties te helpen hun ecologische
                                voetafdruk te verkleinen door gebruik te maken
                                van milieuvriendelijke materialen en
                                productiemethoden. Wij bieden hoogwaardige
                                printoplossingen, zoals brochures,
                                visitekaartjes, en posters, terwijl we actief
                                streven naar het minimaliseren van de impact op
                                het milieu.
                            </p>
                            <div
                                className="content-bottom"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{ textAlign: "center" }}>
                                    <span
                                        style={{
                                            fontSize: "36px",
                                            fontWeight: "bold",
                                            color: "#e4047c",
                                        }}
                                    >
                                        100+
                                    </span>
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            color: "#e4047c",
                                        }}
                                    >
                                        Tevreden klanten
                                    </p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <span
                                        style={{
                                            fontSize: "36px",
                                            fontWeight: "bold",
                                            color: "#f481bc",
                                        }}
                                    >
                                        100%
                                    </span>
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            color: "#f481bc",
                                        }}
                                    >
                                        Klanttevredenheid
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterAreaThree;
