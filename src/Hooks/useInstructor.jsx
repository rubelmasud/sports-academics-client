import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const { data: isInstructor } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('is admin response', res);
            return res.data.instructor
        }

    })

    return [isInstructor]
};

export default useInstructor;
