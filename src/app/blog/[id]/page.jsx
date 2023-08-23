import React from 'react';

const getSinglePost = async (id)=> {
    const url = `https://basic-blog.teamrabbil.com/api/post-details/${id}`
    const res = await fetch(url)
    const data = await res.json()
    return data 
}

const SingleBlog = async ({params}) => {
    const {id} = params
    const postDetail = getSinglePost(id)
    console.log(postDetail);
    return (
        <div className="container mx-auto">
            <h2 className="text-xl">
                Post Title: <br/>
                {postDetail.title}
            </h2>
        </div>
    );
};

export default SingleBlog;