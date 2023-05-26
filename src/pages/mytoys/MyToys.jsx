import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';
import { useState } from 'react';
import MyToysRow from './MyToysRow';
import useTitle from '../../components/hooks/useTitle';

const MyToys = () => {

    useTitle('My Toy')
    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([]);
    const [sort, setSort] = useState('ascending')

    useEffect(() => {
        fetch(`https://eleventh-assignment-server-sooty.vercel.app/myToy/${user?.email}?sort=${sort}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user, sort]);

    const handleSortByPrice = () => {
        const getSortValue = sort === 'ascending' ? 'descending' : 'ascending';
        setSort(getSortValue);
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://eleventh-assignment-server-sooty.vercel.app/myToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining)
                        }
                    })
            }
        })

    }


    return (
        <>
         
                <h3 className='text-2xl text-center font-bold mb-5'>My Toy</h3>
                <div className='text-center'>
                    <button
                        onClick={handleSortByPrice}
                        className='btn'>
                        {sort === 'ascending' ? 'Price Low to High' : ' Price High to Low'}
                    </button>
                </div>
                <div className='overflow-x-auto w-[80%] mx-auto rounded '>
                    <table className="table w-full table-zebra mx-auto" >
                        {
                            myToys.map(myToy => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                            ></MyToysRow>)
                        }
                    </table>
                </div>
        
        </>
    );
};

export default MyToys;