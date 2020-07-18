import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getPostIds, getPost } from "../../lib/posts";
import Date from "../../components/date";

type getPostType = ReturnType<typeof getPost> extends Promise<infer T>
  ? T
  : never;

export default function PostPage({ postData }: { postData: getPostType }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}): Promise<{ props: { postData: getPostType } }> {
  const postData = await getPost(params.id);
  return {
    props: {
      postData,
    },
  };
}
