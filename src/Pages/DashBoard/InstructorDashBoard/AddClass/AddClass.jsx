import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
const Image_hosting_token = import.meta.env.VITE_IMGBB_KEY

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_hosting_token}`

    const onSubmit = (data) => {
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
                    const image = imageRes.data.display_url;
                    const classData = {
                        ...data,
                        status: 'pending'
                    };
                    const ClassInfo = {
                        NameOfClass: classData.Class_Name,
                        Image: image,
                        Email: classData.My_email,
                        Name: classData.My_name,
                        AvailableSeats: parseInt(classData.availableSeats),
                        Student: parseFloat(classData.student),
                        Price: classData.price,
                        Status: classData.status
                    }
                    fetch('http://localhost:5000/addclass', {
                        method: 'POST',
                        headers: {
                            'content-type': "application/json"
                        },
                        body: JSON.stringify(ClassInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                toast.success('Class add successfully !!')
                                reset()
                            }
                        })
                }
            })
    };

    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-2xl font-semibold text-center my-4'>Add A Class</h1>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className=" items-center w-full grid md:grid-cols-3 gap-6">
                    <div className="">
                        <label htmlFor="className">Class Name:</label>
                        <input
                            className='h-8 rounded-md shadow-md block w-full px-2'
                            type="text"
                            id="className"
                            placeholder='sport-name'
                            {...register('Class_Name', { required: true })}
                        />
                        {errors.className && <span>This field is required</span>}
                    </div>


                    <div className="w-6/12">
                        <label htmlFor="classImage">Class-Image:</label>
                        <input
                            type="file"
                            className="h-8  rounded-md shadow-lg  p-2  border  border-orange-500"
                            {...register("image")} required />
                        {errors.classImage && <span>This field is required</span>}
                    </div>

                    <div className="">
                        <label>My name:</label>
                        <input
                            className='h-8 rounded-md shadow-md block w-full px-2'
                            type="text"
                            readOnly
                            value={user?.displayName}
                            {...register('My_name')}
                        />
                    </div>
                </div>


                <div className="flex my-4 justify-around w-full gap-12">
                    <div className="w-full">
                        <label>Instructor email:</label>
                        <input
                            className='h-8 rounded-md shadow-md block w-full px-2'
                            type="email"
                            readOnly
                            {...register('My_email')}
                            value={user?.email}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="availableSeats">Available seats:</label>
                        <input
                            className='h-8 rounded-md shadow-md block w-full px-2'
                            type="number"
                            id="availableSeats"
                            placeholder='Available-Seats'
                            {...register('availableSeats', { required: true, min: 0 })}
                        />
                        {errors.availableSeats && <span>This field is required</span>}
                    </div>

                    <div className="w-full">
                        <label htmlFor="price">Class Fee:</label>
                        <input
                            className='h-8 rounded-md shadow-md block w-full px-2'
                            type="number"
                            id="price"
                            placeholder='amount'
                            {...register('price', { required: true, min: 0 })}
                        />
                        {errors.price && <span>This field is required</span>}
                    </div>
                    <div className="w-full">
                        <label htmlFor="student">Class Student:</label>
                        <input
                            className='h-8 rounded-md shadow-md block w-full px-2'
                            type="number"
                            placeholder='Student'
                            {...register('student', { required: true, min: 0 })}
                        />
                        {errors.price && <span>This field is required</span>}
                    </div>
                </div>

                <div className="text-center w-4/12 mx-auto my-12">
                    <button className="btn btn-warning w-full btn-sm shadow-lg" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;
