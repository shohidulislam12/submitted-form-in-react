import { useState } from "react";


const StatefulForm = () => {
const [email,setEmail]=useState(null)
const [password,setPassword]=useState(null)
const [error,setError]=useState('');

    const handleSubmit=e=>{
        e.preventDefault();
        console.log('stateful form');
        console.log(email);
        console.log(password);
        if (password.length<6){
            setError('password must be 6 character')
            }
            else{
                setError('')
                console.log(password);
            }
            
    }
    const handleEmailchange=e=>{
       
console.log(e.target.value);
setEmail(e.target.value);
    }
    const handlepasswordChange=e=>{
        setPassword(e.target.value)
    }
    return (
        <div>
                        <form onSubmit={handleSubmit} >
                <input type="text" name="name" />
                <br />
                <input 
               onChange={handleEmailchange} type="email" name="email" />
                <br />
                <input
                onChange={handlepasswordChange} type="password" name="password" />
                <br />
             <input type="submit"  value="Submit"/>
            </form>
            {
                error&&<div> <p>password mut be 6 character</p></div>
            }
        </div>
    );
};

export default StatefulForm;