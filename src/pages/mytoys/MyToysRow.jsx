import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({ myToy, handleDelete }) => {
    const { photo,price, _id, name } = myToy
    return (
        <>
            <tbody >
                <tr>
                    <th className='avatar'>
                        <div class="w-20 rounded">
                            <img src={photo} />
                        </div>
                    </th>
                    <th>{name}</th>
                    <th>${price}</th>
                    <td>
                        <Link to={`/updateToy/${_id}`} >
                            <button className="btn">Update</button>
                        </Link>
                    </td>
                    <td>
                        <Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn">
                                Delete </button>
                        </Link>
                    </td>
                </tr>

            </tbody>


        </>
    );
};

export default MyToysRow;