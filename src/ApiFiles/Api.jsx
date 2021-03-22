
const Api_key ="UYKOjfjBxUdrR41JZWQoFK5UWx12"

// Make function to get all upcoming matches data 

export const getcrickdata =()=>{
    const url=`https://cricapi.com/api/matches/?apikey=${Api_key}`

    return fetch(url).then((resdata)=> resdata.json()).catch((err)=> console.log(`your error is ${err}`))
}


// To loaad match details 

export const getcrickdetails=(id)=>{
    const url=`https://cricapi.com/api/cricketScore/?apikey=${Api_key}&unique_id=${id}`

    return fetch(url).then((resdata)=>resdata.json()).catch((hrerr)=> console.log(hrerr)
    )}