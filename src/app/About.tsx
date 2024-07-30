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
        `.${styles.sectionOne}`,
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

      // Animate Section Two from the bottom
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
        <p>me</p>
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Joakim is sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          <br></br>
          <br></br>
          Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
      <div className={`${styles.section} ${styles.sectionThree}`}>
        <p>Open for work<br></br>@joakim</p>
        <p className={styles.greyBars}>BEHIND</p>
        <p className={styles.greyBars}>THE</p>
        <p className={styles.greyBars}>CAMERA</p>
      </div>
    </section>
  );
}
