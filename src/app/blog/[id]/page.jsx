"use client"
import SectionHeading from '@/components/utils/SectionHeading';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const SingleBlog =  ({params}) => {
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = params
  
   useEffect(() => {
   fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)
   .then(res => res.json())
   .then(data => {
    setDetails(data.postDetails);
    setLoading(false)
   })   
   }, [id])

 
   
    return (
      <div className="container mx-auto">
        <SectionHeading>Single Post-Post Id: {id}</SectionHeading>
        <div className="my-4">
          <div className="text-xl">
            <div>
                <Link className="text-blue-500" href={'/blog'}>Blog  </Link> {'>'} <span>Post Details</span>
            </div>
            {
                (()=> {
                 if (loading) {
                    return <div className="w-full text-4xl flex justify-center items-center ">Loading...</div>
                 }else {
                  if(!details){
                    return <div className="my-4 text-xl text-rose-400" >
                        No details found for this post
                    </div>
                  }else {
                    return (
                      <div>
                        <div className="hero  ">
                          <div className="hero-content flex-col lg:flex-row">
                            <Image
                              placeholder="empty"
                              src={details.img}
                              alt={details.title}
                              width={320}
                              height={96}
                              fallback="/images/not-found.png"
                            />
                            <div>
                              <h1 className="text-xl font-bold">
                                {details.title}
                              </h1>
                              <p className="py-6">{details.content}</p>
                              <div className="mt-4">
                                <div className="mb-2">
                                  Created:{" "}
                                  {moment(details.created_at).format(
                                    "DD/MMM/YYYY"
                                  )}
                                </div>
                                <div className="mb-2">
                                  Last Update:{" "}
                                  {moment(details.updated_at).format(
                                    "DD/MMM/YYYY"
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                 }
                })()
            }
          </div>
        </div>
      </div>
    );
};

export default SingleBlog;