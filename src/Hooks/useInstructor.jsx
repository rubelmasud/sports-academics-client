import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const { data: isInstructor = false } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            // console.log(res);
            return res.data.instructor
        }

    })

    return [isInstructor]
};

export default useInstructor;
