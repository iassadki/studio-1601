// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "../app/components/layout/Header";
import Hero from "../app/components/sections/Hero";
import Services from "../app/components/sections/Services";
import Projects from "../app/components/sections/Projects";
import Prices from "../app/components/sections/Prices";
import FAQ from "../app/components/sections/FAQ";
import Contact from "../app/components/sections/Contact";
// import Footer from "../app/components/layout/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Projects />
            <Prices />
            <FAQ />
            <Contact />
            {/* <Footer /> */}
        </div>
    );
}