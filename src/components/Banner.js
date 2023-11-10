import React from 'react';
import Navigation from './Navigation';

const Banner = () => {
   return (
      <div className="navigation">
         <h1><img src="/assets/logoKasa.svg" alt="logo Kasa" /></h1>
         
         <Navigation />
      </div>
   );
};

export default Banner;