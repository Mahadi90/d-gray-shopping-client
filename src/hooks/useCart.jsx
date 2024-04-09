
import { useContext } from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../providers/AuthProvider';

const useCart = () => {
   const axios = useAxios()
   const {user} = useContext(AuthContext)

   const {refetch, data : cart = []} = useQuery({
    queryKey : ['cart', user?.email],
    queryFn : async () => {
        const res = await axios.get(`/carts?email=${user.email}`)
        return res.data;
    }
   })
   return [cart, refetch]
};

export default useCart;