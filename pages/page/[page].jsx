import React from "react";
import Link from "next/link";
import { getSortedPostData } from "../../lib/post";

const pageViewPost = 2;

export const getStaticPaths = async () => {
  const allPostData = getSortedPostData();
  const pageCount = Math.ceil(
    parseInt(allPostData.length) / parseInt(pageViewPost)
  );

  const paths = allPostData.slice(0, pageCount).map((_, i) => ({
    params: {
      page: parseInt(i + 1).toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const nowArryCount = parseInt(params.page);
  const allPostData = getSortedPostData();
  const viewPost = allPostData.slice(
    (parseInt(nowArryCount) - parseInt(1)) * pageViewPost,
    parseInt(nowArryCount) * parseInt(pageViewPost)
  );
  return {
    props: {
      viewPost,
      nowArryCount,
    },
  };
};

const Page = ({ viewPost, nowArryCount }) => {
  return (
    <>
      <p>{nowArryCount}</p>
      {viewPost.map(({ id, title, date, thumbnail }) => (
        <article key={id}>
          <Link href={`/posts/${id}`}>
            <h2>{title}</h2>
            <p>{date}</p>
            <img src={`${thumbnail}`} alt="" />
          </Link>
        </article>
      ))}
      <Link href={`/page/${nowArryCount - 1}`}>前へ</Link>
      <Link href={`/page/${nowArryCount + 1}`}>次へ</Link>
    </>
  );
};

export default Page;
