import React from 'react';

const Rating = ({ stars=0 }) => {
    const ratingTab = [];
    for (let i = 0; i < stars; i++) {
        
        ratingTab.push(<img key={i}  src="/assets/star-active.svg" alt="active"></img>);
    }
    
    for (let i = 5; i>stars; i--){
        ratingTab.push(<img key={i} src="/assets/star-inactive.svg" alt="inactive"></img>);
        
    }
    


   return (
       <div className='rating'>
           {ratingTab}
                 </div>
   );
};

export default Rating;