import React from "react";
import ServicesAreaItem from "./ServicesAreaItem";

const ServicesArea = () => {
    const services_area_list = [
        {
            title: "Advies en begeleiding",
            desc: " Wil je iets weten ove drukwerktechnieken, papiersoorten, afwerkingen of fullfillment? Heb je een schijnbaar idiote wens als het gaat om levertijden, drukwerkformaten en afwerkingen?",

            delay_time: 2,
        },
        {
            title: "Online drukwerk",
            desc: "We behoren tot de top in online drukwerk. Al jaren. Kijken, kiezen, bestellen. Tegen de laagste prijs en morgen in huis. Makkelijker kan niet. Goedkoper en beter kun je niet terecht.",

            delay_time: 4,
        },
        {
            title: "Digitaal drukwerk",
            desc: "Soms is een oplage van 1, 5 of 150 stuks meer dan voldoende voor je presentatie. In dat geval bieden onze digitale drukpersen de schitterende, ultrasnelle en ook financieel slimme optie.",

            delay_time: 6,
        },
        {
            title: "Gepersonaliseerd drukwerk",
            desc: "Je direct mailing scoort beter door het contact persoonlijk te maken. Met dit gepersonaliseerd drukwerk, via Variabele Data Printing (VDP), win je het hart en hoofd van elke prospect.",

            delay_time: 8,
        },
        {
            title: "Offset drukwerk",
            desc: "Onze persen draaien voor sterke merken: van Diesel tot Philips en Porsche. Met het traditionele offsetdrukwerk van Printvisie weet je zeker dat je een klassieke topprestatie in handen krijgt.",

            delay_time: 8,
        },
        {
            title: "Lorem Ipsum",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

            delay_time: 8,
        },
    ];

    return (
        <section className="services-area pt-35 pb-95">
            <div className="container">
                <div className="row justify-content-center">
                    {services_area_list.map((item, index) => (
                        <div
                            key={index}
                            className="col-xl-4 col-lg-5 col-md-6 col-sm-10"
                        >
                            <ServicesAreaItem index={index} item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesArea;
