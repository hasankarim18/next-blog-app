import * as moment from "moment";
import React from "react";
import SectionHeading from "../utils/SectionHeading";

const postCategories = async () => {
  const url = "https://basic-blog.teamrabbil.com/api/post-categories";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const HomeBlog = async () => {
  const categories = await postCategories();
  
  return (
    <div className="my-8">
      
      <SectionHeading> 
         Categories
      </SectionHeading>
      <div className="mt-4 grid  grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-4 ">
        {categories.map((cat) => {
         const dateToBeFormate =  cat.updated_at;
          return (
            <div key={cat.id} className="flex w-full justify-center">
              <div className="card w-96 bg-base-100 border hover:shadow-inner ">
                <div className="card-body">
                  <h2 className="card-title">{cat.name}</h2>
                  <p>
                    <span className="mr-2">Last Updated: </span>
                    {moment(dateToBeFormate).format("DD/MMM/YYYY")}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary btn-outline">
                      View Posts
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

export default HomeBlog;
