import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

    const metadata = matter(contents);

    return {
      id,
      ...metadata.data,
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
