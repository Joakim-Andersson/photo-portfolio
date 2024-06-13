import Image from "next/image";
import styles from "./page.module.css";
import joki from "/public/images/joki.png";


export default function About() {
  return (
    <section className={styles.about}> 
           <div className={styles.bar}></div>
            <div className={styles.sectionOne}>
            <p>me</p>
            <Image 
                src={joki} 
                alt="Photo of Joakim Andersson" 
                className={styles.AboutImg}
            />
            <div className={styles.tags}>
                <p>1993</p>
                <p>swedish</p>
                <p>cool kid</p>
             </div>
            </div>
            <div className={styles.sectionTwo}>
            <p>     Joakim is sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            <br></br>
            <br></br>
            Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
           </div>


    </section> 
  );
}
