import React from 'react';
import  './homelayout.css';
import Header from './Header';
import Footer from './Footer';
const Home=({children})=>{
    return(
    <div class='home-container'>
     <Header/>
     <div style={{height:'90%'}}>
         {children}
         </div>
     <Footer/>
     </div>
    )
}
export default Home