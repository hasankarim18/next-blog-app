import React from 'react';

const SectionHeading = ({children}) => {
    return (
      <div className="py-4 bg-gray-200">
        <h2 className="text-3xl text-center text-black my-4">{children}</h2>
      </div>
    );
};

export default SectionHeading;