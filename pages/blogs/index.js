import React from "react";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await await res.json();
  return {
    props: {
      posts,
    },
  };
};

export default function Blogs({ posts }) {
  return (
    <>
      <Head>
        <title>All Blogs</title>
      </Head>
      <h1 className="text-center text-primart py-3">All Blogs</h1>
      <div className="col-md-8 offset-md-2">
        {posts.map((post) => (
          <div className="card mb-3" key={post.id}>
            <div className="card-body">
              <Link href={`/blogs/${post.id}`}>
                <a> {post.title} </a>
              </Link>
            </div>
          </div>
        ))}

        <pre>{JSON.stringify(posts, null, 4)}</pre>
      </div>
    </>
  );
}
