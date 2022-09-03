import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react'
import Card from '../components/card/Card';

const Home = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    request();
  
  }, [])
  const request =async()=>{
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(data);
    }
    catch(e){
        console.log(e);
    }
    
  }
  
    return (
    <div style={{display:"flex", flexWrap:"wrap",flexDirection:"row",justifyContent:"space-evenly"}}>
        {data.map((element)=>{
          return <div >
            <Card  key= {element.id} title={element.title} body={element.body} />
        </div>
      })}
    </div>
  )
}

export default Home