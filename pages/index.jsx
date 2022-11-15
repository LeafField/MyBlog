import { getSortedPostData } from "../lib/post";
import Link from "next/link";
import Layout from "../component/Layout";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const allPostData = getSortedPostData();

  return {
    props: {
      allPostData,
    },
  };
};

export default function Home({ allPostData }) {
  const animeRef = useRef();
  const tl = gsap.timeline();
  useEffect(() => {
    tl.from(animeRef.current, { scaleX: 0, duration: 1 });
  }, []);
  return (
    <>
      <Layout ref={animeRef}>
        {allPostData.slice(0, 5).map(({ id, title, date, thumbnail }) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <h2>{title}</h2>
              <p>{date}</p>
              <img src={`${thumbnail}`} alt="" />
            </Link>
          </article>
        ))}
        <Link href={`/page/1`}>and more...</Link>
      </Layout>
    </>
  );
}
