import logo from '../../../assets/Logo/logo.png'

const PopularInstructors = () => {
    return (
        <div className="md:mt-28 px-10 md:px-0 mt-12">
            <div className="mb-10 text-center  ">
                <h1 className="text-3xl font-bold text-center mb-2 border-l-4 border-r-4 md:w-2/12 mx-auto border-orange-500">Popular Instructors</h1>
                <img className='md:w-12 h-12 text-center mx-auto' src={logo} alt="" />
                <p className='md:w-6/12 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus exercitationem maxime laudantium. Consequuntur porro deleniti fugiat nisi laudantium natus beatae nulla.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mx-auto md:px-0">
                <div className="card card-compact w-96 bg-base-200 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;