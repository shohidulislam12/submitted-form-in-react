

const ReuseAbleForm = ({fromTitle,children,handleSubmit,submmitBtntext='Submit'}) => {

    const handlelocalSubmit=e=>{
        e.preventDefault();
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            number:e.target.number.value,
        }
        handleSubmit(data)
    }
    return (
        <div>
       {children}
            <form onSubmit={handlelocalSubmit} >
                   
                <input type="text" name="name" />
                <br />
                <input type="text" name="email" />
                <br />
                <input type="text" name="number" />
                <br />
             <input type="submit"  value={submmitBtntext}/>
            </form>
        </div>
    );
};

export default ReuseAbleForm;