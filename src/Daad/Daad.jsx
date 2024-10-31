import Myself from "../Myself/Myself";
import Sister from "../Sister/sister";
import Brother from "./Brother/Brother";


const Daad = ({assest}) => {
    return (
        <div>
            <h2>Daaa</h2>
            <Myself assest={assest}></Myself>
            <Sister></Sister>
            <Brother></Brother>
        </div>
    );
};

export default Daad;