import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPosts, Post } from "../lib/posts";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hello I'm bobstrange as a web developer</p>
        <p>This is a example website</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {posts.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPosts();
  return {
    props: {
      posts,
    },
  };
};
