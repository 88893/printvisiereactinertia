import React from "react";
import BrandAreaThree from "../../components/Brand/BrandAreaThree";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import CommunityArea from "../../components/CommunityArea/CommunityArea";
import NewsLetterAreaTwo from "../../components/NewsLetter/NewsLetterAreaTwo";
import TeamAreaThree from "../../components/Team/TeamAreaThree";
import Layout from "../../layouts/Layout";

const TeamPage = () => {
  return (
    <Layout header={1} footer={1} className="" mainClassName="">
      <BreadcrumbArea
        title={"Jouw specialisten"}
        subtitle={"Team"}
        showShape={false}
        className={" breadcrumb-area-two pt-175"}
      />
      <CommunityArea />
      <TeamAreaThree />
      <BrandAreaThree />
    </Layout>
  );
};

export default TeamPage;
