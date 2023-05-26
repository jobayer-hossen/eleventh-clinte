
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from './SingleToy';
import useTitle from '../../components/hooks/useTitle';


const AllToys = () => {
    useTitle('All Toy')
    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys);
    // console.log(allToys)

    const searchField = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        fetch(`https://eleventh-assignment-server-sooty.vercel.app/searchName/${toyName}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });


    }


    return (
        <>

            <div className='w-[20%] mx-auto mt-4 mb-6 '>
                <h3 className='text-2xl text-center font-bold mb-5'>All Toy</h3>
                <form onSubmit={searchField}>
                    <div className='flex gap-5'>
                        <div className="form-control w-full">
                            <input name='toyName' type="text" placeholder="Search by any Name" className="input input-bordered" />
                        </div>

                        <button type="submit" className='btn btn-primary'>Search </button>

                    </div>
                </form>
            </div>


            <div className='overflow-x-auto w-[80%] mx-auto'>
                <table className="table w-full table-zebra" >
                    <thead>
                        <tr>
                            <th>Seller Name-(who posted)</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Av: Quantity</th>
                            <th>Vew Details</th>
                        </tr>
                    </thead>
                    {
                        toys.slice(0,20).map(toys => <SingleToy
                            key={toys._id}
                            toys={toys}
                        ></SingleToy>)
                    }

                </table>
            </div>

        </>
    );
};

export default AllToys;