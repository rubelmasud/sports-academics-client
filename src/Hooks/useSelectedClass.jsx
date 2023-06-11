import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSelectedClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [data: selectClass = [], refetch] = useQuery({
        queryKey: ['selectClass', user?.email],
        queryFn: async () => {
            await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res);
            return res.data.selectClass
        }
    })
    return [selectClass, refetch]
};

export default useSelectedClass;