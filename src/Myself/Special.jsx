import { useContext } from "react";
import { AssestContext } from "../Grandpa/Grandpa";


const Special = ({assest}) => {
    const gift=useContext(AssestContext)
    return (
        <div>
            <h3>special</h3>
            <p>has :{assest}</p>
            <p>Also has :{gift}</p>
        </div>
    );
};

export default Special;