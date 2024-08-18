"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './page.module.css';
import cta from '/public/images/cta.png';
import img1 from '/public/images/feet.jpg';
import img2 from '/public/images/water.webp';
import img3 from '/public/images/smoking.webp';
import img4 from '/public/images/shadowdog.png';
import img5 from '/public/images/bricks.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const firstNameEl = document.querySelector(`.${styles.firstName}`);
    const lastNameEl = document.querySelector(`.${styles.lastName}`);
    const ctaEl = document.querySelector(`.${styles.cta}`);

    // Apply animation to Joakim Andersson heading
    gsap.fromTo(
      firstNameEl,
      { x: -window.innerWidth, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );

    gsap.fromTo(
      lastNameEl,
      { x: window.innerWidth, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
    );

    // Add subtle rotate animation to the CTA
    gsap.to(ctaEl, {
      rotation: 10,
      duration: 0.4,
      yoyo: true,
      repeat: 2,
      delay: 1, // Start after the heading animation
      onComplete: () => {
        gsap.to(ctaEl, { rotation: 0, duration: 0.2 });
      }
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bar}></div>
      <div className={styles.barText}>
        <p>Fujifilm XT4</p>
        <p>2019 - Present</p>
        <p>Oslo (GMT+1)</p>
      </div>
      <div className={styles.bar}></div>
      <p className={styles.emoji}>📷</p>
      <div className={styles.headings}>
        <h1 className={styles.h1}>
          <span className={styles.firstName}>JOAKIM</span>
          <br />
          <span className={styles.lastName}>ANDERSSON</span>
        </h1>
        <h2>Capturing subtle <br />moments with<br />my Fuji</h2>
      </div>
      <div className={styles.photos}>
        <div className={styles.photo}>
          <Image
            placeholder="blur"
            priority
            src={img2}
            alt="Description 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.photo}>
          <Image
            placeholder="blur"
            priority
            src={img1}
            alt="Description 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.photo}>
          <Image 
            placeholder="blur"
            priority
            src={img3}
            alt="Description 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.photo}>
          <Image
            placeholder="blur"
            priority
            src={img4}
            alt="Description 4"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.photo}>
          <Image
            placeholder="blur"
            priority
            src={img5}
            alt="Description 5"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={`${styles.photo} ${styles.cta}`}>
          <a href="mailto:heytherejoakim@gmail.com">
            <Image
              priority
              src={cta}
              alt="link to collaborate with Joakim."
            />
          </a>
        </div>
      </div>
    </section>
  );
}
