import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';
import useTitle from '../components/hooks/useTitle';
const AddToy = () => {
    useTitle('Add Toy')
    const { user } = useContext(AuthContext)
    const handleAddToy = (event) => {

        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const userEmail = user?.email;

        const addToy = {
            photo, name, sellerEmail, sellerName, category, price, rating, quantity, description, userEmail
        }

        console.log(addToy)
        fetch('https://eleventh-assignment-server-sooty.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })

    }


    return (



        <>

            <div className="hero-content ">
                <div className="card w-[70%] shadow-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                    <form onSubmit={handleAddToy}>
                        <div className="card-body">
                            <div className='flex gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Toy Photo</span>
                                    </label>
                                    <input required name='photo' type="text" placeholder="photo url" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input required name='name' type="text" placeholder="toy ame" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Seller Name </span>
                                    </label>
                                    <input required name='sellerName' type="text" placeholder={user?.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input required name='sellerEmail' type="text" placeholder={user?.email} className="input input-bordered" />
                                </div>
                            </div>
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
                                    <input required name='price' type="text" placeholder="price" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input required name='rating' type="text" placeholder="rating" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input required name='quantity' type="text" placeholder="available quantity" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Detail Description</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered" placeholder="Write short detail description"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="input input-bordered btn btn-primary" >Add New Toy</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default AddToy;