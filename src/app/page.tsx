import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Hey Ruth - what should we name this project - CraftCore - DataLoom -
        Stitchboard
      </main>
      <footer className={styles.footer}>
        © 2025 Stitchboard • Built with Next.js
      </footer>
    </div>
  );
}
