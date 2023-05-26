import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {
    const { user , logOutUser} = useContext(AuthContext);
    //  handle logout --
    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.error(error));
    };
    return (
        <div>
            <div className=" mx-auto rounded mt-2 shadow-xl navbar w-[90%] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            
                            {user ? <>
                            <li><Link to='/myToys' >My Toys</Link></li>
                            <li><Link to='/addToy'>Add A Toy</Link></li>
                            

                        </> : <>

                        </>}
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        <li><Link to='/blog' >Blogs</Link></li>
                            
                        </ul>
                    </div>
                    <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/644/644344.png?w=740&t=st=1684575462~exp=1684576062~hmac=883650ec78c8d2943ee2565fcae2fb32cf4712b50284d09ddba2c20f035ac244" alt="" />

                    <p className='text-2xl font-bold hover:text-teal-600'>RoboLand</p>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        
                        {user ? <>
                            <li><Link to='/myToys' >My Toys</Link></li>
                            <li><Link to='/addToy'>Add A Toy</Link></li>
                            

                        </> : <>

                        </>}

                        <li><Link to='/blog' >Blogs</Link></li>


                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <button
                                onClick={handleLogOut}
                                type="button"
                                className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
                            >
                                Log Out
                            </button> :<Link to='/login'>
                            <button
                                
                                type="button"
                                className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
                            >
                                Login
                            </button> 
                            </Link>}
                {user &&  <label className=" avatar tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName} >
                            <div className="w-10 rounded-full " >
                                <img src={user?.photoURL} />
                            </div>
                        </label>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;