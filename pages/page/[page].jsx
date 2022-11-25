import React from "react";
import Link from "next/link";
import { getSortedPostData } from "../../lib/post";
import Pagination from "../../component/Pagination";
import styles from "../../styles/page.module.scss";

const pageViewPost = 5;

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
  const maxPage = Math.ceil(allPostData.length / pageViewPost);
  const viewPost = allPostData.slice(
    (parseInt(nowArryCount) - parseInt(1)) * pageViewPost,
    parseInt(nowArryCount) * parseInt(pageViewPost)
  );
  const pageCount = Math.ceil(allPostData.length / pageViewPost);
  const pagination = allPostData.slice(0, pageCount).map((_, i) => i + 1);
  return {
    props: {
      viewPost,
      nowArryCount,
      maxPage,
      pagination,
    },
  };
};

const Page = ({ viewPost, nowArryCount, maxPage, pagination }) => {
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

      <div className={styles.pagination}>
        {nowArryCount !== 1 && (
          <Link href={`/page/${nowArryCount - 1}`}>前へ</Link>
        )}
        {pagination.map((page) => (
          <Link href={`/page/${page}`} key={page}>
            <Pagination page={page} />
          </Link>
        ))}
        {nowArryCount !== maxPage && (
          <Link href={`/page/${nowArryCount + 1}`}>次へ</Link>
        )}
      </div>
    </>
  );
};

export default Page;
