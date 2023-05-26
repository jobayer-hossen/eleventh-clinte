import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation } from 'react-router-dom';

const Notification = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation();
    if(user){
        return children
    }
    return (
        <>
            <div state={{from:location}} className="card w-[50%] mx-auto mt-20 mb-48 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-2xl font-bold text-center mt-10 mb-10 '>“You have to log in first to view details”</p>
                    <div className="card-actions justify-center">
                        <Link to='/login' ><button className="btn btn-primary">GO TO LOGIN PAGE</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notification;