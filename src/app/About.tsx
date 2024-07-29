"use client";

import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './page.module.css';
import joki from '/public/images/joki.png';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const animations = [
        {
          element: `.${styles.sectionOne}`,
          animation: { x: -100, opacity: 0 },
          finalState: { x: 0, opacity: 1 },
        },
        {
          element: `.${styles.sectionTwo}`,
          animation: { y: 100, opacity: 0 },
          finalState: { y: 0, opacity: 1 },
        },
        {
          element: `.${styles.sectionThree}`,
          animation: { x: 100, opacity: 0 },
          finalState: { x: 0, opacity: 1 },
        },
      ];

      animations.forEach(({ element, animation, finalState }) => {
        gsap.fromTo(
          element,
          animation,
          {
            ...finalState,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 30%", 
              end: "bottom 1%", 
              scrub: true,
              //markers: true, // Enable markers for debugging
            },
          }
        );
      });
    });

    return () => ctx.revert(); // Cleanup the animations when the component unmounts
  }, []);

  return (
    <section className={styles.about}>
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
