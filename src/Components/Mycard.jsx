import Card from '@material-ui/core/Card';
import Images from '../Images/img3.jpg'
import {getcrickdetails} from '../ApiFiles/Api'


import { Button,Grid , CardActions, CardContent, Typography,CardMedia, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import React ,{useState} from 'react'



const Mycard = ({match}) => {

    const [matchdetails , setMatchdetails]= useState({})
    const [open , setOpen]=useState(false)

    const Clickevent=(id)=>{
        
        getcrickdetails(id).then((data)=> 
         {console.log(data) ; setMatchdetails(data) ; handleOpen()} ).catch(err=> console.log
            (err))
    }

    const getmycard=()=>{
       return (
    
       
       <Card style={{marginTop:25}}>
       <CardContent>

           <Grid  container justify="center" spacing={4} alignItems="center" >
               <Grid item >
                 <Typography variant="h6">{match.teams[0]} </Typography>
               </Grid>
               <Grid item >
               
               {/* Old Way to give path in meterial ui , */}

               {/* <img style={{width:85}} src={require('../Images/mg9.jpg') } alt="crick" /> 

                */}
                    {/* new way to give path  */}

                <CardMedia component="img" style={{width:100 , height:100}} src={Images}/>

               </Grid>
               <Grid item >
               <Typography variant="h6">{match.teams[1]} </Typography>
               </Grid>

           </Grid>

       </CardContent>
       <CardActions>
          <Grid container  justify="center" >
              <Grid item>
              <Button onClick={()=>{Clickevent(match.id)}} item  style={{marginRight:20}} variant="contained" color="primary">
               Show Dtails
            </Button>
           <Button item  variant="contained" color="primary">
               Start Time {new Date(match.dateTimeGMT).toLocaleString()}
           </Button>
              </Grid>
            
         

          </Grid>
           
       </CardActions>


   </Card>
  
)};

    

    const handleclose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }



    const getdialog=()=>(
    
        
        <Dialog open={open} onClose={handleclose}>
            <DialogTitle id="alert-dialog-title">{"Full Match Details...."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-discription">

                    <Typography> {matchdetails.hasSquad? true:""}</Typography>
                    <Typography> Match <span style={{fontWeight:40}}>{matchdetails.status? "started":"Still not started"}</span> </Typography>
                    <Typography > Score <span> {matchdetails.score}</span></Typography>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleclose} color="primary" > Close</Button>
            </DialogActions>

        </Dialog>

);
    



    return (
        <>
       {getmycard()}
       {getdialog()}

        </>
    )

 
   
             
    
};

export default Mycard;
