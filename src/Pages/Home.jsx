import HealthCare from "../Components/HomeComponents/HealthCare"
import HomeDescription from "../Components/HomeComponents/HomeDescription"
import ReviewCarousal from "../Components/HomeComponents/ReviewCarousal"


function Home (){
    return (
        <div>
           <HealthCare />
            <ReviewCarousal />     
           <HomeDescription />
        </div>
    )
}

export default Home 