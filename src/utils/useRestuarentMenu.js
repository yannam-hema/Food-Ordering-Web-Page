import { useState,useEffect } from "react"
import { MENU_DATA_API } from "./constants";
const useRestuarentMenu =(resId)=>{
     const [ResInfo,setResInfo]=useState(null);
     useEffect(()=>{
    fetchMenu();
     },[]);

     const fetchMenu= async()=>{
        const response = await fetch(MENU_DATA_API + resId);
        const json_data = await response.json(); 
        setResInfo(json_data.data);
     }
    return ResInfo;
}

export default  useRestuarentMenu;
