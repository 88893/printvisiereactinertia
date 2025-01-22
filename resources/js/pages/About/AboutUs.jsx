import React from "react";
import BrandArea from "../../components/Brand/BrandArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ConsultationAreaTwo from "../../components/Consultation/ConsultationAreaTwo";
import CounterAreaThree from "../../components/CounterArea/CounterAreaThree";
import HistoryArea from "../../components/HistoryArea/HistoryArea";
import InnerServicesArea from "../../components/ServicesArea/InnerServicesArea";
import SuccessArea from "../../components/SuccessArea/SuccessArea";
import TeamAreaTwo from "../../components/Team/TeamAreaTwo";
import TestimonialArea from "../../components/Testimonial/TestimonialArea";
import Layout from "../../layouts/Layout";

const AboutUs = () => {
  return (
    <Layout header={1} footer={1} className="" mainClassName="">
      <BreadcrumbArea
        title="About Us"
        subtitle={"About Us"}
        className={"pt-175 pb-140"}
      />      <CounterAreaThree />
      <HistoryArea />
      <TestimonialArea />
    </Layout>
  );
};

export default AboutUs;
