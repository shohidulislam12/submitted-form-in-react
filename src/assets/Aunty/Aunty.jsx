import { useContext } from "react";
import Cousin from "../../Cousin/Cousin";
import { MoneyContex } from "../../Grandpa/Grandpa";


const Aunty = () => {
    const [money,setmoney]=useContext(MoneyContex)
    console.log(money);
    return (
        <div>
            <h2>Aunty</h2>
          <section>
          <Cousin name={'shefali'}></Cousin>
          <Cousin name={'batasi'}></Cousin>
          </section>
          <p>money:{money}</p>
          <button onClick={()=>setmoney(money+1000)}>add money 100</button>
        </div>
    );
};

export default Aunty;