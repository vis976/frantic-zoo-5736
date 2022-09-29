import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>   
        </Routes>
        <Footer />
        </>
    )
}

export default AllRoutes