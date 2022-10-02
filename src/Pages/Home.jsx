import BrandsCarousel from "../Components/HomeComponents/BrandsCarousel"
import HomeCarousal from "../Components/HomeComponents/HomeCarousal"
import HomeCatagoryCards from "../Components/HomeComponents/HomeCatagoryCards"
import HomeDescription from "../Components/HomeComponents/HomeDescription"
import LabTestCarousal from "../Components/HomeComponents/LabTestCarousal"
import OffersCarousels from "../Components/HomeComponents/OffersCarousels"
import PharmEasyPlusBanner from "../Components/HomeComponents/PharmEasyPlusBanner"
import ReviewCarousal from "../Components/HomeComponents/ReviewCarousal"


function Home (){
    return (
        <div>
            <div padding='30px'>
            <HomeCarousal />
            </div>
            <div className="Content" style={{overflowX:"hidden", height:"100%" ,padding:"50px", position:"relative"}}>
            <HomeCatagoryCards />
            <PharmEasyPlusBanner />
            <OffersCarousels />
            <LabTestCarousal />
             <BrandsCarousel />
            <ReviewCarousal />     
           <HomeDescription />
       </div>
        </div>
    )
}

export default Home 