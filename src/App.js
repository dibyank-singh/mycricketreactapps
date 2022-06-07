// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// require("dotenv").config()
import Mycard from './Components/Mycard';
import React , {useEffect , useState} from 'react'
import Navbar from './Components/Navbar'
import {getcrickdata} from './ApiFiles/Api'
import './App.css';
import {Grid}  from '@material-ui/core' 

 
function App() { 

   const [matches , setMatches ]= useState([])

  useEffect(() => {
    getcrickdata()
      .then((gotdata)=> {setMatches(gotdata.data)  
        console.log(gotdata)
      console.log(gotdata.data) }
      ).catch((agnerr)=>console.log(`your error is here at ${agnerr}`))
    },[]);

  return (
    <>
    
      <Navbar/>
      <h1 style={{display:'flex' , justifyContent:'center', marginTop:15}}>Cricket Score</h1>
      
      <Grid container>
        <Grid sm="2"> </Grid>
        <Grid sm="8">  
        
        {
          matches.map((match)=>(
            <Mycard key={match.id} match={match} />
          ))
        }
        
        </Grid>
         


      </Grid>
     
      
    </>
  );
}

export default App;
