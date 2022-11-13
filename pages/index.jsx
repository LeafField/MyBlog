import styles from "../styles/Home.module.css";

import { getSortedPostData } from "../lib/post";
import Link from "next/link";

export const getStaticProps = async () => {
  const allPostData = getSortedPostData();

  return {
    props: {
      allPostData,
    },
  };
};

export default function Home({ allPostData }) {
  return (
    <>
      <h1>Hello World</h1>
      <p>nextjsの練習用ブログ</p>
      <p>{allPostData.length}</p>
      {allPostData.map(({ id, title, date, thumbnail }) => (
        <article key={id}>
          <Link href={`/posts/${id}`}>
            <h2>{title}</h2>
            <p>{date}</p>
            <img src={`${thumbnail}`} alt="" />
          </Link>
        </article>
      ))}
      <Link href={`/page/1`}>and more...</Link>
    </>
  );
}
