import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSelectedClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const { data: selectClass = [], refetch } = useQuery({
        queryKey: ['selectClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allSelectedClass?email=${user?.email}`)
            return res.data
        }
    })
    return [selectClass, refetch]
};

export default useSelectedClass;