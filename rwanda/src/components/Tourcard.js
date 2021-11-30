import React,{useState} from "react";
import 'antd/dist/antd.css';
import {Drawer} from 'antd';
import SingleTour from "./SingleTour";
import { Typography,Divider } from "antd";



const Tourcard=({data})=>{
    const [drawerVisible,setDrawerVisible]=useState(false);
    const handleclickDrawerVisible=()=>{
        setDrawerVisible(true);
    }
    const closeDrawervisible=()=>{
        setDrawerVisible(false)
    }
    return(
        <>
        <Drawer title ="Basic Drawer"placement="right"visible={drawerVisible} width={600} onClose={()=>closeDrawervisible()}>
              <SingleTour data={data}/>
            </Drawer>
            
        <div className="Tourview">
            <div className="tourimage">
            { <img src={data.images[0]} />}
            </div>
           <div className="tourview-text">
              <Typography>
              <h3 > {data.title}</h3>
               <p style={{fontSize: "10px",color: "black",marginbottom:"5px",marginRight:"10px"}}>{data.description} </p>
               <span 
                 style={{
                      display:"flex",
                      justifycontent: "space-between",
                      marginTop:"10px",
                      fontWeight: "500",
                      fontSize:"8px",
                      // padding:"10px",
                      }}>
              <p>Date Scheduled <br/>
              {data.dateScheduled}</p> 
              {/* <p>Date Scheduled <br/> 
              {data.Scheduled}</p> */}
              <p>Available seats <br/>
              {data.seats}</p>
               
               
           </span>
           </Typography>
           <a href="#"><button className="morebutton" onClick={()=> handleclickDrawerVisible()}>Read More...</button></a>
       
          
         </div>
      </div>
        </>
      );
  };
  export default Tourcard;
