"use client";

import Header from "@/components/Header";
import Hero from "./Hero";
import InteractiveDemo from "./InteractiveDemo";
import SocialProof from "./SocialProof";
import ProblemStatement from "./ProblemStatement";
import ProductOverview from "./ProductOverview";
import Agents from "./Agents";
import Work from "./Work";
import WorkflowShowcase from "./WorkflowShowcase";
import DayInLife from "./DayInLife";
import ImpactStats from "./ImpactStats";
import Pricing from "./Pricing";
import TrustCompliance from "./TrustCompliance";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Waitlist from "./Waitlist";
import Footer from "@/components/Footer";
import styles from "./Home.module.sass";

const HomePage = () => {
    return (
        <div className={styles.outer}>
            <Header />
            <Hero />
            <InteractiveDemo />
            <SocialProof />
            <ProblemStatement />
            <ProductOverview />
            <Agents />
            <Work />
            <WorkflowShowcase />
            <DayInLife />
            <ImpactStats />
            <Pricing />
            <TrustCompliance />
            <Testimonials />
            <Faq />
            <Waitlist />
            <Footer />
        </div>
    );
};

export default HomePage;
