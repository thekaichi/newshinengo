import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { charityTheme } from "common/theme/charity";
import ResetCSS from "common/assets/css/style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Charity/Navbar";
import DrawerSection from "containers/Charity/DrawerSection";
import BannerSection from "containers/Charity/BannerSection";
import FeatureSection from "containers/Charity/FeatureSection";
import BranchSection from "containers/Charity/BranchSection";
import WorkSection from "containers/Charity/WorkSection";
import MilestoneBlock from "containers/Charity/MilestoneBlock";
import HumanityBlock from "containers/Charity/HumanityBlock";
import PromotionBlock from "containers/Charity/PromotionBlock";
import DonateSection from "containers/Charity/DonateSection";
import MapSection from "containers/Charity/MapSection";
import FundraiserSection from "containers/Charity/FundraiserSection";
import BlogSection from "containers/Charity/BlogSection";
import ClientBlock from "containers/Charity/ClientBlock";
import Footer from "containers/Charity/Footer";
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from "containers/Charity/charity.style";

const Charity = () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>
            Shine NGO | A Non Government Organization Based at Gorakhpur
          </title>
          <meta
            name="Description"
            content="e are not for profit organisation with our office based at Gorakhpur, Uttar pradesh. We work for better education in the early stage(class 1-3) in Rural villages. We have two Education hut at Shankrapur and Adarsh nagar (Gorakhpur). "
          />
          <meta name="theme-color" content="#FCF22B" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of charity head section */}
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <ContentWrapper>
            <BannerSection />
            <FeatureSection />
            <BranchSection />
            <WorkSection />
            <MilestoneBlock />
            <HumanityBlock />
            <PromotionBlock />
            <DonateSection />
            <MapSection />
            <FundraiserSection />
            <BlogSection />
            <ClientBlock />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Charity;
