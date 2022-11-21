import React from "react";
import Layout from "../../component/Layout";
import { getAllPostIDs, getPostData } from "../../lib/post";

export const getStaticPaths = async () => {
  const paths = getAllPostIDs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default function Posts({ postData }) {
  return (
    <>
      <h1>{postData.title}</h1>
      <h2>{postData.date}</h2>
      <img src={`${postData.thumbnail}`} alt="" />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />;
    </>
  );
}
