"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./_components/ui/header/Header";
import HeroPage from "./_components/HeroPage";
import AboutSection from "./_components/AboutSection";
import Projects from "./_components/Projects";
import Footer from "./_components/ui/footer/Footer";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";
import Contact from "./_components/Contact";
import Entry from "./_components/Entry";
import Scroll from "./_components/ui/SmoothScroll/SmoothScroll";
import ParallaxComponent from "./_components/Parallax";

export default function Home() {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });
  return (
    <main className={styles.main}>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        trailingSpeed={12}
        innerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
        outerStyle={{
          border: "3px solid #fff",
          mixBlendMode: "exclusion",
        }}
      />
      <Header />
      <div id="home"><Entry /></div>
      <section className={styles.mainSection}>
        <HeroPage />
      </section>
      <ParallaxComponent quote="one" image="https://i.ibb.co/QjhSFGk/nebula-4k-teal-turquoise-wallpaper-032b333ddd19ab25df069207c82bc838-1-1.jpg" />
      <section id="about" className={styles.mainSection}>
        <AboutSection />
      </section>
      {/* <Entry /> */}

      {/* <section className={styles.mainSection}>
        <Skills />
      </section> */}

      <section id="experience" className={styles.mainSection}>
        <Experience />
      </section>
      <section id="projects" className={styles.mainSection}>
        <Projects />
      </section>
      <ParallaxComponent quote="two" image="https://i.ibb.co/RPLGzkz/eth-India-modified.jpg" />
      <section className={styles.mainSection}>
        <Contact />
      </section>
    </main>
  );
}
