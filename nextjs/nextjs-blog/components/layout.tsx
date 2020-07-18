import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const author = "bobStrange";
export const siteTitle = "Next.js example";

const renderHead = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

const renderHeader = (home) => {
  if (home) {
    return (
      <>
        <img
          src="/images/profile.png"
          className={`${styles.headerHomImage} ${utilStyles.borderCircle}`}
          alt={author}
        />
      </>
    );
  } else {
    return (
      <>
        <Link href="/">
          <a>
            <img
              src="/images/profile.png"
              className={`${styles.headerHomImage} ${utilStyles.borderCircle}`}
              alt={author}
            />
          </a>
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>{author}</a>
          </Link>
        </h2>
      </>
    );
  }
};

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {renderHead()}
      <header className={styles.header}>{renderHeader(home)}</header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
