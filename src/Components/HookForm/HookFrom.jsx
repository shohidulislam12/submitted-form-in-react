import useInputState from "./UseInputState";


const HookFrom = () => {
    const[name,handleNamechange] =useInputState('sdd')
const handleSubmit=e=>{
    e.preventDefault()
    console.log('from dtata',name);
}
    return (
        <div>
                        <form onSubmit={handleSubmit} >
                <input value={name} onChange={handleNamechange} type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="number" name="number" />
                <br />
             <input type="submit"  value="Submit"/>
            </form>
        </div>
    );
};

export default HookFrom;