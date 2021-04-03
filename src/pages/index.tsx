import Head from 'next/head';
import cx from 'classnames';
import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <div className={cx(styles.container)}>
      <Head>
        <title>React Lottie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cx(styles.main)}></main>

      <footer className={cx(styles.footer)}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={cx(styles.logo)} />
        </a>
      </footer>
    </div>
  );
}
