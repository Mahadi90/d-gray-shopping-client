import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';

const Carttable = ({index,item,refetch}) => {

    const axios = useAxios()

    const handleDeleteCart = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/carts/${id}`)
                .then(res => {
                 if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch()
                 }
                })
            }
          });
        }

    return (
        <tr>
             <td>
                <h2>{index + 1}</h2>
             </td>
              <td>
               <img className='w-16 h-16' src={item.img} alt="" />
              </td>
              <td>
               <h2>{item.name}</h2>
              </td>
              <td>{item.price} Tk</td>
              <th>
                <button onClick={() => handleDeleteCart(item._id)} className="p-4 rounded-full bg-red-500 text-white"><FaTrashAlt className='w-6 h-6'></FaTrashAlt></button>
              </th>
            </tr>
    );
};

export default Carttable;