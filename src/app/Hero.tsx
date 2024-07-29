"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './page.module.css';
import cta from '/public/images/cta.png';
import img1 from '/public/images/building.jpg';
import img2 from '/public/images/city.jpg';
import img3 from '/public/images/watersteph.jpg';
import img4 from '/public/images/shadowdog.png';
import img5 from '/public/images/bricks.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const firstNameEl = document.querySelector(`.${styles.firstName}`);
    const lastNameEl = document.querySelector(`.${styles.lastName}`);
    const ctaEl = document.querySelector(`.${styles.cta}`);
    const photos = document.querySelectorAll(`.${styles.photo}`);

    // Debugging: Log the elements to ensure they are selected correctly
    console.log('firstNameEl:', firstNameEl);
    console.log('lastNameEl:', lastNameEl);
    console.log('ctaEl:', ctaEl);

    // Apply basic animation to verify elements are being animated
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

    // Apply wacky animations to photos
    photos.forEach((photo, index) => {
      gsap.fromTo(photo, {
        opacity: 0,
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
        rotation: gsap.utils.random(-90, 180),
        scale: gsap.utils.random(0.5, 1.5)
      }, {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 2,
        ease: 'elastic.out(1, 0.9)',
        delay: index * 0.2
      });
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
        <h2>Capturing subtle <br />moments in<br />Scandinavia</h2>
      </div>
      <div className={styles.photos}>
        <div className={styles.photo}>
          <Image
            src={img2}
            alt="Description 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.photo}>
          <Image
            src={img1}
            alt="Description 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.photo}>
          <Image
            src={img3}
            alt="Description 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.photo}>
          <Image
            src={img4}
            alt="Description 4"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.photo}>
          <Image
            src={img5}
            alt="Description 5"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={`${styles.photo} ${styles.cta}`}>
          <Image
            src={cta}
            alt="Description 6"
          />
        </div>
      </div>
    </section>
  );
}
