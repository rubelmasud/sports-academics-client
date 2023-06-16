import Banner from "../Banner/Banner";
import OurFacilities from "../OurFacilitis/OurFacilities";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {

    return (
        <div>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <OurFacilities />
        </div>
    );
};

export default Home;