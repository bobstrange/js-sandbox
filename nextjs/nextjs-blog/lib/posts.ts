import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  id: string;
  title: string;
  date: string;
}

export function getSortedPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const postsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const contents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(contents);

    return {
      id,
      ...matterResult.data,
    } as Post;
  });

  return postsData.sort((left, right) => {
    if (left.date < right.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPost(id: string) {
  const postPath = path.join(postsDirectory, `${id}.md`);
  const contents = fs.readFileSync(postPath, "utf8");

  const matterResult = matter(contents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    ...matterResult.data,
    contentHtml,
  } as Post & { contentHtml: string };
}
