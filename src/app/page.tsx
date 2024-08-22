import Hero from './Hero';
import About from './About';
import Photos from './Photos';
import styles from './page.module.css';

export default function Home() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div>
      <Hero />
      <Photos />
      <About />
      <footer className={styles.footer}>
        <p>© {currentYear} Joakim Andersson Photography. All rights reserved.</p>
      </footer>
    </div>
  );
}
