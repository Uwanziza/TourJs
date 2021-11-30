import React from "react";
import HomeLayout from '../components/HomeLayout';
import allTourData from '../Assets/constants/tour.json';
import Tourcard from "../components/Tourcard";
const Tourview=()=>{
    return (
        <HomeLayout>
            <div className='tour-container'>
            {
                 allTourData.map((data)=>(<Tourcard data={data}/>))
             }
          </div>
                  
        </HomeLayout>
        
    )
}
export default Tourview