import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const getAllPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullpath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullpath, "utf-8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data
    };

  })

  return getAllPostData.sort((a, b) => {
    if (a.data < b.data) {
      return 1;
    } else {
      return 2;
    };
  });
}

export function getAllPostIDs() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map(filename => {
    return {
      params: {
        id: filename.replace(/\.md$/, ""),
      }
    }
  })
};

export async function getPostData(id) {
  const fullpath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullpath, "utf-8");
  const matterResult = matter(fileContent);

  const acceptContent = await remark().use(html).process(matterResult.content);
  const contentHTML = acceptContent.toString();

  return {
    id,
    contentHTML,
    ...matterResult.data
  }
}