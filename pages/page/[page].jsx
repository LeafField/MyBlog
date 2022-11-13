import React from "react";
import Link from "next/link";
import { getSortedPostData } from "../../lib/post";

const pageViewPost = 2;

export const getStaticPaths = async () => {
  const allPostData = getSortedPostData();
  const pageCount = Math.ceil(
    parseInt(allPostData.length) / parseInt(pageViewPost) + 1
  );

  const paths = allPostData.slice(0, pageCount).map((_, i) => ({
    params: {
      page: i.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const nowArryCount = parseInt(params.page) - 1;
  const allPostData = getSortedPostData();
  const viewPost = allPostData.slice(
    parseInt(nowArryCount) * pageViewPost,
    (parseInt(nowArryCount) + 1) * parseInt(pageViewPost) + 1
  );
  return {
    props: {
      viewPost,
    },
  };
};

const Page = ({ viewPost }) => {
  return (
    <>
      {viewPost.map(({ id, title, date, thumbnail }) => (
        <article key={id}>
          <Link href={`/posts/${id}`}>
            <h2>{title}</h2>
            <p>{date}</p>
            <img src={`${thumbnail}`} alt="" />
          </Link>
        </article>
      ))}
      <Link href={`/page/2`}>次へ</Link>
    </>
  );
};

export default Page;
