

// const Api_key ="UYKOjfjBxUdrR41JZWQoFK5UWx12"
const Api_key ="c34f05b9-b5ba-403e-a6b6-e66ae968a5b7"
// Make function to get all upcoming matches data 

export const getcrickdata =()=>{
    const url=`https://api.cricapi.com/v1/currentMatches?apikey=${Api_key}`
    // const url=`https://cricapi.com/api/matches/?apikey=${Api_key}`

    return fetch(url).then( (resdata)=> resdata.json()).catch((err)=> console.log(`your error is ${err}`))
    
}     


// To loaad match details 

export const getcrickdetails=(id)=>{
    const url=`https://api.cricapi.com/v1/currentMatches?apikey=${Api_key}&=${id}`

    return fetch(url).then((resdata)=>resdata.json()).catch((hrerr)=> console.log(hrerr)
    )}