import { useEffect, useRef } from "react";


const RefRorm = () => {
    const nameRef=useRef(null)
    const mailRef=useRef(null)
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    const handleSubmit=e=>{
        e.preventDefault()
        console.log('ref form submit');
        console.log(nameRef.current.value);
        console.log(mailRef.current.value);
        
    }
    return (
        <div>
              <form onSubmit={handleSubmit} >
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input  ref={mailRef} type="text" name="email" />
                <br />
                <input type="text" name="number" />
                <br />
             <input type="submit"  value="Submit"/>
            </form>
        </div>
    );
};

export default RefRorm;