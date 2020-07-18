import Layout from "../../components/layout";
import { getPostIds, getPost } from "../../lib/posts";

export default function Post() {
  return <Layout></Layout>;
}

export async function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}
