import React from 'react';
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../components/hooks/useTitle';

const UpdateToy = () => {
    useTitle('Update');
    const toy = useLoaderData();
    const {_id} = toy;
    console.log(toy)

    const handleUpdateToy =(event) =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToys = {price,quantity,description};

        fetch(`https://eleventh-assignment-server-sooty.vercel.app/updateToy/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedToys)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount){
                form.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Toy Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }




    
    return (
        <>
             <div className="hero-content ">
                <div className="card w-[70%] shadow-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                    <form onSubmit={handleUpdateToy}>
                        <div className="card-body">
                            <div className='flex gap-5 items-center'>
                            <div className="form-control w-[100%]">
                                <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select name='category' className="select select-bordered">
                                        <option>Fighter</option>
                                        <option>Worker</option>
                                        <option>Car</option>
                                    </select>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input required name='price' type="text" placeholder="Price" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input required name='rating' type="text" placeholder="Rating" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input  required name='quantity' type="text" placeholder="Available Quantity" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Detail Description</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered" placeholder="Write short detail description"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="input input-bordered btn btn-primary" >Updated Toy</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateToy;