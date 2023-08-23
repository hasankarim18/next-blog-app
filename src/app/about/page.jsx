import AboutMenu from '@/components/About/AboutMenu';
import SectionHeading from '@/components/utils/SectionHeading';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const About = () => {
    
    return (
      <div className="">
        <SectionHeading>About Us</SectionHeading>
        <p className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, illum
          unde aperiam ea, suscipit ipsa aliquam ab, recusandae nihil tenetur
          architecto molestiae iusto consectetur quaerat numquam enim ipsam
          libero neque!
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          pariatur perspiciatis aut sapiente doloremque sequi, repudiandae quia
          quidem molestiae natus necessitatibus, asperiores, quaerat sunt in
          dolorem tempora cupiditate sed officiis.
        </p>
      </div>
    );
};

export default About;