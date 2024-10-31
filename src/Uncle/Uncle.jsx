import Cousin from "../Cousin/Cousin";

const Uncle = ({assest}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <div className="flex">
                <Cousin assest={assest} name={'fahim'}></Cousin>
                <Cousin name={"akash"}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;