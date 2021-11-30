import React from 'react';
// import  './home.css';
import HomeLayout from '../components/HomeLayout';
const CreateAccount=()=>{
    return(
        <HomeLayout>
           <div className='CreateAccount1'>
              
        <h2> Create Account</h2> 
         <label> Name :</label>
             <input type="text" name="name" /><br/><br/>
         
         <label> Email : </label>
             <input type="email" name="email" /><br/><br/>
            
             <label> Phone : </label>
             <input type="number" name="phone" /><br/><br/>

             <label> Date: </label>
             <input type="date" name="date" /><br/><br/>

             <label> Password: </label>
             <input type="password" name="pass" /><br/><br/>
           
           <button>SignUp</button>
          
        </div>
            </HomeLayout>
    )
}
export default CreateAccount;