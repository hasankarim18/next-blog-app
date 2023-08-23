import React from 'react';

const SingleBlog = ({params}) => {
    const {id} = params
    return (
        <div>
            Single blog : {id}
        </div>
    );
};

export default SingleBlog;