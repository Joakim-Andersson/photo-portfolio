"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './page.module.css';
import joki from '/public/images/joki.png';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Section One from the left
      gsap.fromTo(
        `.${styles.sectionOne}`,  // Correct class selection with template string
        { xPercent: -100 },
        {
          xPercent: 0,
          scrollTrigger: {
            trigger: `.${styles.sectionOne}`,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      // Animate Section Two opacity
      gsap.fromTo(
        `.${styles.sectionTwo}`,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: `.${styles.sectionTwo}`,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      // Animate Section Three from the right
      gsap.fromTo(
        `.${styles.sectionThree}`,
        { xPercent: 100 },
        {
          xPercent: 0,
          scrollTrigger: {
            trigger: `.${styles.sectionThree}`,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    // Use setTimeout to delay the ScrollTrigger.refresh() call
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // Adjust the delay as needed

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.bar}></div>
      <div className={`${styles.section} ${styles.sectionOne}`}> 
        <Image
          src={joki}
          alt="Photo of Joakim Andersson"
          className={styles.AboutImg}
        />
        <div className={styles.tags}>
          <p>1993</p>
          <p>swedish</p>
          <p>kid</p>
        </div>
      </div>
      <div className={`${styles.section} ${styles.sectionTwo}`}>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionate about Scandic beauty and Greek vacations. I specialize in artistic and scenic photography, with a focus on architecture, vintage cars, and portraits.
          <br></br>
          <br></br>
          With my Fujifilm camera and Italian Greyhound in hand, I enjoy capturing visual stories of our seemingly-mundane surroundings. Always open to collab on creative projects.
        </p>
      </div>
      <div className={`${styles.section} ${styles.sectionThree}`}>
        <p>Find me<br></br>@heytherejoakim</p>
        <p className={styles.greyBars}>BEHIND</p>
        <p className={styles.greyBars}>THE</p>
        <p className={styles.greyBars}>CAMERA</p>
      </div>
    </section>
  );
}
