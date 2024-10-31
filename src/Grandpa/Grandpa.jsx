import { createContext, useState } from "react";
import Aunty from "../assets/Aunty/Aunty";
import Daad from "../Daad/Daad";
import Uncle from "../Uncle/Uncle";
import './granda.css'
 export const AssestContext=createContext('gold')
 export const MoneyContex=createContext(1000);
const Grandpa = () => {
    const assest='diamond';
    const [money,setmoney]=useState(1000)
   
    return (
        <div className="gradpa">
            <h2>Grandpa</h2>
            <p>net money:{money}</p>
         <MoneyContex.Provider value={[money,setmoney]}>
         <AssestContext.Provider value="gold">
            <section className="gradpa">
        <Daad assest={assest}></Daad> 
            <Uncle ></Uncle>
            <Aunty></Aunty>
            </section>
            </AssestContext.Provider>

         </MoneyContex.Provider>
        </div>
    );
};

export default Grandpa;