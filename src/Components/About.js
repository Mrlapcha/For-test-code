import React from 'react';
// import Profile from '../assets/profile.jpg'; 
import { Styles } from '../utils/Style';
// import Resume from '../assets/SLC.pdf';

const About = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-10 p-10" id="Home">
      <div className="flex-1 py-4">
        <span className={Styles.heroHeadText}>
          Hi, I'm <span className='text-red-600'>Khemraj</span>
          <br />
          <span className={Styles.heroHeadText.heroSubText}>
            I am a front-end Developer &
            <br />
            Web Designer
          </span>
        </span>
      </div>
    </div>
  );
};

export default About;
