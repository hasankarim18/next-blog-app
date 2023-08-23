import AboutMenu from '@/components/About/AboutMenu';
import SectionHeading from '@/components/utils/SectionHeading';
import React from 'react';

const layout = ({children}) => {
    return (
      <div className="container mx-auto py-4">       
        <div className="grid grid-cols-[1fr,5fr] my-4">
          <div>
            <AboutMenu />
          </div>
          <div className="">
            {children}
          </div>
        </div>
      
      </div>
    );
};

export default layout;