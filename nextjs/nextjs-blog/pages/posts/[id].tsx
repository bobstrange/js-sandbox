import Layout from "../../components/layout";
import { getPostIds, getPost, Post } from "../../lib/posts";

type getPostType = ReturnType<typeof getPost> extends Promise<infer T>
  ? T
  : never;

export default function PostPage({ postData }: { postData: getPostType }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
