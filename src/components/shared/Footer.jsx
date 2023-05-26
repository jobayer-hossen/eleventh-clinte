import React from 'react';
import { FaPhone, FaMailBulk, FaRoute } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer rounded mt-5  w-[90%] mx-auto p-10 text-base-content bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500">
                <div className='w-[10%] mx-auto text-center'>
                    <img className='' src="https://cdn-icons-png.flaticon.com/512/644/644344.png?w=740&t=st=1684575462~exp=1684576062~hmac=883650ec78c8d2943ee2565fcae2fb32cf4712b50284d09ddba2c20f035ac244" alt="" />
                    <p className='font-bold text-lg'>RoboLand</p>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Contact Information</span>
                    <p className='flex font-medium items-center'><FaPhone className='mr-2' />0175500000</p>
                    <p className='flex font-medium items-center'><FaMailBulk className='mr-2' />roboland@info.com</p>
                    <p className='flex font-medium items-center'><FaRoute className='mr-2' />Rupayan Town , Fatullah , Bangladesh</p>

                    <div className='flex mt-5 gap-6'>
                        <Link to='https://www.youtube.com/@ProgrammingHero'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                        </Link>

                        <Link to='https://www.facebook.com/groups/programmingherocommunity'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </Link>

                    </div>


                </div>
            </footer>
            <footer className="footer w-[90%] mx-auto rounded footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by RoboLand</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;