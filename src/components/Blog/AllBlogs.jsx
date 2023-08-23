
import * as moment from "moment";
import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Image from "next/image";
import Link from "next/link";

const getAlltPost = async () => {
  const url = "https://basic-blog.teamrabbil.com/api/post-list/2";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const AllBlogs = async () => {
  const appPosts = await getAlltPost();

  return (
    <div className="my-8">
      <SectionHeading>Latest Posts</SectionHeading>
      <div className="mt-4 grid  grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-4 ">
        {appPosts.map((post) => {
          const dateToBeFormate = post.updated_at;
          return (
            <div key={post.id} className="flex w-full justify-center">
              <div className="card w-96 bg-base-100 border">
                <figure>
                  <Image
                    placeholder="empty"
                    src={post.img}
                    alt={post.title}
                    width={320}
                    height={96}
                    fallback="/images/not-found.png"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.short}</p>
                  <div className="card-actions justify-end">
                    <Link href={`/blog/${post.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBlogs;
