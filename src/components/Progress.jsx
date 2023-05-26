import React from 'react';
import Lottie from "lottie-react";
import animation from '../../public/loading/98635-loading.json'
const Progress = () => {
    return (
        <>
            {/* lottie animation  */}
            <div className='w-[35%] mx-auto'>
                <Lottie animationData={animation} loop={true} />

            </div>
        </>
    );
};

export default Progress;