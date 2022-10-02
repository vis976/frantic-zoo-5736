import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import ErrorComponents from '../Components/ErrorComponents'
import { AllCategory } from "./AllCategory";
import IndivisualProduct from './IndivisualProduct'
import Products from './Products'
function AllRoutes(){
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>   
            <Route path="/healthcare" element={<AllCategory />}/>
            <Route path="/healthcare/products" element={<Products />}/>
            <Route path="/healthcare/products/:id" element={<IndivisualProduct />}/>
            <Route  path="*" element={<ErrorComponents />} />
        </Routes>
        <Footer />
        </>
    )
}

export default AllRoutes