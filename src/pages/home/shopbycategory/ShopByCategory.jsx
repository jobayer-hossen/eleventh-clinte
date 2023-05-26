import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const ShopByCategory = () => {
    const [categoryName, setCategoryName] = useState('Fighter')
    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch(`https://eleventh-assignment-server-sooty.vercel.app/category/${categoryName}`)
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [categoryName])
    // console.log(catagories)
    // console.log(categoryName)
    return (
        <>
        <Fade bottom>
            <div className='w-[90%] mx-auto text-center '  >
            <h1 className='text-2xl font-bold text-center mt-10 mb-10'>Shop by category</h1>
                <Tabs>
                    <TabList>
                        <Tab onClick={()=>setCategoryName('Fighter')} >Fighter</Tab>
                        <Tab onClick={()=>setCategoryName('Worker')}>Worker</Tab>
                        <Tab onClick={()=>setCategoryName('Car')}>Car</Tab>
                    </TabList>
                    <TabPanel>
                      <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-center mb-10'>
                      {
                        catagories.slice(0,2).map(category =>
                            <div >
                            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={category.photo} alt="Shoes" className="rounded-xl w-[95%]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title mb-6">{category.name} </h2>
                                    <p className='font-medium'>Price: <span className='font-normal'> ${category.price}</span></p>
                                    <p className='font-medium'>Rating: <span className='font-normal'>  {category.rating}</span></p>
                                    <Link to={`/toy/${category._id}`} >
                                <button className="btn ">Details</button>
                            </Link>
                                </div>
                            </div>
                        </div>
                            ) 
                       }
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-center mb-10'>
                      {
                        catagories.slice(0,2).map(category =>
                            <div >
                            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={category.photo} alt="Shoes" className="rounded-xl w-[95%]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title mb-6">{category.name} </h2>
                                    <p className='font-medium'>Price: <span className='font-normal'> ${category.price}</span></p>
                                    <p className='font-medium'>Rating: <span className='font-normal'>  {category.rating}</span></p>
                                    <Link to={`/toy/${category._id}`} >
                                <button className="btn ">Details</button>
                            </Link>
                                </div>
                            </div>
                        </div>
                            ) 
                       }
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-center mb-10'>
                      {
                        catagories.slice(0,2).map(category =>
                            <div >
                            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={category.photo} alt="Shoes" className="rounded-xl w-[95%]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title mb-6">{category.name} </h2>
                                    <p className='font-medium'>Price: <span className='font-normal'> ${category.price}</span></p>
                                    <p className='font-medium'>Rating: <span className='font-normal'>  {category.rating}</span></p>
                                    <Link to={`/toy/${category._id}`} >
                                <button className="btn ">Details</button>
                            </Link>
                                </div>
                            </div>
                        </div>
                            ) 
                       }
                      </div>
                    </TabPanel>
                </Tabs>
            </div>
            </Fade>
        </>
    );
};

export default ShopByCategory;