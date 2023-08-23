import Link from 'next/link';
import React from 'react';

const AboutBread = ({children}) => {
    return (
      <div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href={'/about'}> About </Link>
            </li>
            <li>
              <Link href={`/about/${children}`}>{children} </Link>
            </li>
            
          </ul>
        </div>
      </div>
    );
};

export default AboutBread;