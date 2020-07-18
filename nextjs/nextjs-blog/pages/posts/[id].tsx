import Layout from "../../components/layout";
import { getPostIds, getPost, Post } from "../../lib/posts";

export default function PostPage({ post }: { post: Post }) {
  return (
    <Layout>
      {post.title}
      <br />
      {post.id}
      <br />
      {post.date}
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
}): Promise<{ props: { post: Post } }> {
  const post = getPost(params.id);
  return {
    props: {
      post,
    },
  };
}
