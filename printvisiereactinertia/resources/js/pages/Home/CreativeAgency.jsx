import React from "react";
import AboutArea from "../../components/About/AboutArea";
import BannerOne from "../../components/Banner/BannerOne";
import ConsultationArea from "../../components/Consultation/ConsultationArea";
import ProjectArea from "../../components/Project/ProjectArea";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import TeamArea from "../../components/Team/TeamArea";
import TestimonialArea from "../../components/Testimonial/TestimonialArea";
import Layout from "../../layouts/Layout";

const CreativeAgency = () => {
    return (
        <Layout header={1} footer={1}>
            <BannerOne />
            <ServicesArea />
            <AboutArea />
            <TeamArea />
            {/* <ProjectArea /> */}
            <TestimonialArea />
            <ConsultationArea />
        </Layout>
    );
};

export default CreativeAgency;
