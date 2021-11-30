import React from 'react';
// import  './home.css';
import HomeLayout from '../components/HomeLayout';
import '../components/homelayout.css';
const Home=()=>{
    return(
    <HomeLayout>
        <div className="home_page">
            <h1>Rwanda Booking Tour</h1>
            <div className='qoute_div'>
                <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.<br/>
                 Lorem Ipsum has been the industry's standard dummy <br/>
                 text ever since the 1500s, when an unknown printer took <br/>
                 a galley of type and scrambled it to make a type specimen book<br/>.
                  It has survived not only five centuries, but also the leap<br/>
                   into electronic typesetting, remaining essentially unchanged.</p>
                   <button>Book Now!</button>
        </div>
        </div>
    </HomeLayout>
    )
}
export default Home;
