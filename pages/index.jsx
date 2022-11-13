import styled from "styled-components";
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
      <TitleH1>Hello styled-components</TitleH1>
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

const TitleH1 = styled.h1`
  color: aqua;
`;
