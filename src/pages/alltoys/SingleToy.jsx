import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SingleToy = ({ toys }) => {
    const {user} = useContext(AuthContext)
    const { _id, name, category, price, quantity } = toys
    return (
        <>

                    <tbody>

                        <tr>
                            <td>{user?.displayName}</td>
                            <th>{name}</th>
                            <td>{category}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <td>
                            <Link to={`/toy/${_id}`} >
                                <button className="btn "> Vew Details</button>
                            </Link>
                            </td>
                        </tr>

                    </tbody>

                
            
        </>
    );
};

export default SingleToy;