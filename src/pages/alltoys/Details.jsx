import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../components/hooks/useTitle';

const Details = () => {
    useTitle('Details');
    const toy = useLoaderData();
    const { photo, name, sellerEmail, sellerName,  price, rating, quantity, description } = toy;
    return (
        <>


            <div className="card w-[50%] mt-9 mb-9 shadow-xl mx-auto bg-gradient-to-r from-cyan-200 to-blue-200">
                <figure><img src={photo} className='w-[60%]' alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-body items-start ">
                        <h2 className="text-xl mb-4 font-bold text-center">{name}</h2>
                        <p className='font-medium'> Seller Name:<span className='font-normal'>  {sellerName} </span></p>
                        <p className='font-medium'>Seller Email: <span className='font-normal'>  {sellerEmail}</span></p>
                        <p className='font-medium'>Price : <span className='font-normal'>${price}</span></p>
                        <p className='font-medium'>Quantity: <span className='font-normal'>  {quantity}</span></p>
                        <p className='font-medium'>Rating : <span className='font-normal'>  {rating}</span></p>
                        <p className='font-medium'>Description : <span className='font-normal'>  {description}</span></p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Details;