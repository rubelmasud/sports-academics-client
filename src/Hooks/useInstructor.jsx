import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isInstructor, isLoading, isError } = useQuery(
        ["isInstructor", user?.email],
        async () => {
            try {
                const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
                return res.data.instructor;
            } catch (error) {
                throw new Error("Unauthorized Access");
            }
        }
    );

    return { isInstructor, isLoading, isError };
};

export default useInstructor;
