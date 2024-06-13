import Image from "next/image";
import styles from "./page.module.css";
import cta from "/public/images/cta.png";
import img1 from "/public/images/building.jpg";
import img2 from "/public/images/city.jpg";
import img3 from "/public/images/watersteph.jpg";
import img4 from "/public/images/shadowdog.png";
import img5 from "/public/images/bricks.jpg";


export default function Hero() {
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
        <h1 className={styles.h1}>JOAKIM
          <br></br>
          <span className={styles.lastName}>ANDERSSON 
          </span>
        </h1>
        <h2>Capturing subtle <br></br>moments in<br></br>Scandinavia</h2>
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
        <div className={styles.photo}>
          <Image 
            src={cta} 
            alt="Description 6"  
          />
        </div>
      </div>
    </section> 
  );
}
