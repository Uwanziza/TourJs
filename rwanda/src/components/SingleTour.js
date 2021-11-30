// import { style } from "@mui/system";
import React from "react"
import { Typography,Divider } from "antd";

  
const SingleTour=({data})=>{
    return(
        <div className="singletour-container">
            <Typography>
            <h1>{data.title}</h1>
            <img src={data.images[0]} style={{width:"70%",borderRadius:"0px"}} alt=""/>
            <p>{data.description} </p>
            <span style={{display:"flex",padding:"10px",justifyContent:"space-between",fontWeight:"700"}}>
            <p >Date Schedule <br/>
                {data.dateScheduled} </p><br/>
            <p> Due Date <br/>
                {data.dueDate} </p>
            <p>Phone <br/>
                {data.phone} </p>
                <p> Available Seats
                    {data.available}
                    </p>
             <p> User <br/>
                {data.phone} 
                {data.available}
                    </p>
                    
            </span>
            </Typography>
            <p>{data.ripDescription}</p>
        </div>
    )
}
export default SingleTour;