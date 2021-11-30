import React from "react";
import Home from '../view/Home';
import {Routes ,Route} from 'react-router-dom';
import Tour from '../view/tour';
import CreateAccount from "../view/CreateAccount";
import NewTour from '../view/dashboard/NewTour';
import NewtourView from "../view/dashboard/NewTour";
const Index=()=>{
    return(
        <Routes>
            <Route element={ <Home></Home>} path='/Home'>  </Route>
            <Route element={ <Tour></Tour>} path='/tour'>  </Route>
            <Route element={ <CreateAccount></CreateAccount>} path='/CreateAccount'>  </Route>
            <Route  exact path ='/dash/NewTour' element ={<NewtourView></NewtourView>}> </Route>
    </Routes>

           
    )

};
export default Index
   