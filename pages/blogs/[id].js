import React from "react";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="pt-4 pb-3"> {post.title} </h1>
          <p> {post.body} </p>
        </div>
      </div>
    </>
  );
}
