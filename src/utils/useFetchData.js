import { useState,useEffect } from "react"
import { RES_DATA_API } from "./constants";
const useFectchData=()=>{
    const[listOfRestaurants,setListOfRestaurants]=useState([]);
    useEffect(()=>{
    fectchData();
    },[])
    const fectchData= async () =>{
         const data=await fetch(RES_DATA_API);
         const json= await data.json();
         console.log(json);
         const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      console.log(restaurants);
      setListOfRestaurants(restaurants);
    }
    return listOfRestaurants;
}
export default useFectchData;