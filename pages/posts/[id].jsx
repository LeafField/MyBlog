import Link from "next/link";
import React from "react";
import { getAllPostIDs, getPostData, getNext, getPrev } from "../../lib/post";

export const getStaticPaths = async () => {
  const paths = getAllPostIDs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  const nextID = getNext(params.id);
  const prevID = getPrev(params.id);
  return {
    props: {
      postData,
      nextID,
      prevID,
    },
  };
};

export default function Posts({ postData, nextID, prevID }) {
  return (
    <>
      <h1>{postData.title}</h1>
      <h2>{postData.date}</h2>
      <img src={`${postData.thumbnail}`} alt="" />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
      <div>{prevID && <Link href={`/posts/${prevID}`}>前の記事へ</Link>}</div>
      <div>{nextID && <Link href={`/posts/${nextID}`}>次の記事へ</Link>}</div>
    </>
  );
}
