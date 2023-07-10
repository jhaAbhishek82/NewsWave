
import './App.css';



import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter,

  Route,
  
  Routes
} from "react-router-dom";

// import LoadingBar from 'react-top-loading-bar'

const App =()=> {

 const apiKey = process.env.REACT_APP_NEWS_API
   
  // state = {
  //   progress:0
  // }
  const [progress , setProgress] = useState(0)
    
  // setProgress = (progress)=>{
  //   setProgress({progress: progress})
  // }

  
    return (
      <div>
        <BrowserRouter>
        <NavBar/>

         {/* <LoadingBar
        color='#f11946'
        progress={progress}
       
      />   */}

   


        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} key="general" pageSize={6} country="in" category="general"/>}/>
          <Route exact path="/business"  element={<News apiKey={apiKey}  key="business" pageSize={6} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News apiKey={apiKey}     key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
          <Route exact path="/health" element= {<News apiKey={apiKey}   key="health" pageSize={6} country="in" category="health"/>}/>
          <Route exact path="/science"element= {<News apiKey={apiKey}    key="science" pageSize={6} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News apiKey={apiKey}   key="sports" pageSize={6} country="in" category="sports"/>}/>
          <Route exact path="/technology" element= {<News apiKey={apiKey}  key="technology" pageSize={6} country="in" category="technology"/>}/>
          
          
          
          
        </Routes>
        

        </BrowserRouter>
      </div>
    )
  
}

export default App;
