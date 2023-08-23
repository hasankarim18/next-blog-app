import * as moment from "moment";
import React from "react";
import SectionHeading from "../utils/SectionHeading";
import Image from "next/image";

const getLatestPost = async () => {
  const url = "https://basic-blog.teamrabbil.com/api/post-newest";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const LatestPosts = async () => {
  const latestPost = await getLatestPost();

  return (
    <div className="my-8">
      <SectionHeading>Latest Posts</SectionHeading>
      <div className="mt-4 grid  grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-4 ">
        {latestPost.map((post) => {
          const dateToBeFormate = post.updated_at;
          return (
            <div key={post.id} className="flex w-full justify-center">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={post.img}
                    alt="Shoes"
                    width={384}
                    height={96}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {post.title}
                  </h2>
                  <p>
                    {post.short}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        View Details
                    </button>
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

export default LatestPosts;
