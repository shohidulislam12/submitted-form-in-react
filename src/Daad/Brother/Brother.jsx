import { useContext } from "react";
import { MoneyContex } from "../../Grandpa/Grandpa";


const Brother = () => {
    const[money]=useContext(MoneyContex)
    return (
        <div>
            <p>money:{money}</p>
            <h2>my brother name is shihab</h2>
        </div>
    );
};

export default Brother;