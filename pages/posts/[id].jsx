import Link from "next/link";
import React from "react";
import { getAllPostIDs, getPostData, getNext } from "../../lib/post";

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
  return {
    props: {
      postData,
      nextID,
    },
  };
};

export default function Posts({ postData, nextID }) {
  return (
    <>
      <h1>{postData.title}</h1>
      <h2>{postData.date}</h2>
      <img src={`${postData.thumbnail}`} alt="" />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
      <div>{nextID && <Link href={`/posts/${nextID}`}>次の記事へ</Link>}</div>
    </>
  );
}
