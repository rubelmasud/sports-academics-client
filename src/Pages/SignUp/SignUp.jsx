import { useForm } from "react-hook-form";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const Image_hosting_token = import.meta.env.VITE_IMGBB_KEY

const SignUp = () => {
    const { createUser, updateUserProfile, signInGoogle } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const password = watch('password', '');

    const validatePasswordMatch = (value) => {
        return value === password || 'Passwords do not match';
    };

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                console.log(imageRes);
                if (imageRes.success) {
                    const photoUrl = imageRes.data.display_url;

                    createUser(data.email, data.password)
                        .then((result) => {
                            const user = result.user;
                            console.log(user);
                            updateUserProfile(data.name, photoUrl)
                        }).then(() => {
                            const savedUser = { name: data.name, image: photoUrl, email: data.email }
                            fetch('http://localhost:5000/users/', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(savedUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        reset()
                                        toast.success('User Sign Up Is Successfully !');
                                        navigate(from, { replace: true })
                                    }
                                })

                        })
                        .catch((error) => {
                            console.log(error);
                            setError(error.message)
                        })

                }
            })


    };


    const handleSignInWithGoogle = () => {
        signInGoogle()
            .then((result) => {
                const GoogleUser = result.user;
                console.log(GoogleUser);

                const savedUser = { name: GoogleUser.displayName, image: GoogleUser.photoURL, email: GoogleUser.email }
                fetch('http://localhost:5000/users/', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast.success('User login Is Successfully !');
                            navigate(from, { replace: true })
                        }
                    })

            })
            .catch((error) => {
                console.log(error);
                toast.error({ error })
            })
    }

    return (
        <div className="w-full p-12 mx-auto bg-base-100 grid md:grid-cols-2 py-28">
            <div className=" border-b-4 border-t-2 border-orange-500 p- rounded-lg shadow-lg bg-base-200">
                <p className="text-red-500 text-center mt-2">{error}</p>
                <form className="py-6" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex w-10/12 mx-auto gap-4 items-center">
                        <input type="text" className=" h-12 w-8/12 rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder=" Your Name " {...register("name")} required />

                        <input type="file" className=" rounded-md shadow-lg my-4 px-2  border-l-2 border-r-2 border-orange-500" placeholder=" photoUrl" {...register("image")} required />
                    </div>

                    <input type="email" className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Place give me your email " {...register("email")} required />


                    <div className="flex w-10/12 mx-auto gap-4">

                        <input type={show ? 'text' : 'password'} className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="New Password " {...register("password",
                            {
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/
                            })} required />

                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 character !!</p>}

                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 character !!</p>}

                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must hand ! uppercase  and one special character !!</p>}

                        <input type={show ? 'text' : 'password'} className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Confirm Password " {...register("confirmPassword", {
                            validate: validatePasswordMatch,
                        })} required />
                    </div>

                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

                    <div onClick={() => setShow(!show)} className="w-10/12 mx-auto flex items-center gap-2  mb-2">
                        {
                            show ?
                                <>
                                    <AiFillEyeInvisible className="text-orange-400" ></AiFillEyeInvisible>
                                    <p>Hide password</p>
                                </>
                                :
                                <>
                                    <AiFillEye className="text-orange-400"></AiFillEye>
                                    <p>Show password</p>
                                </>
                        }


                    </div>

                    <div className="w-10/12 mx-auto ">
                        <AwesomeButton className="w-full block" type="primary">Sign Up</AwesomeButton>
                    </div>

                    <div className="flex pt-4 w-10/12 mx-auto gap-3">
                        <small> Already have an account ? </small>
                        <p className="text-orange-500 underline"><Link to='/login'>Place Login</Link></p>
                    </div>

                </form>
                <div onClick={handleSignInWithGoogle} className="w-60 text-center mx-auto my-6">
                    <AwesomeButton className="w-full block" type="primary">   <FcGoogle className="mr-2" /> <span>Continue with google</span></AwesomeButton>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
