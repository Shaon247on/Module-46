import { useState } from "react";

const StateFulForm = () => {
    const [email, setEmail] = useState('Rajoni klanto')
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)
    const [error, setError] =useState()
    const handleSubmit = e =>{
        e.preventDefault()  
        
        if(password.length < 6){
            setError('Password must be at least 6 letter')
        }
        else{
            setError('')
        }
        console.log(name)
        console.log(email)
        console.log(password)
    }
    const handleEmailChange = e =>{
        console.log(e.target.value)
        setEmail(e.target.value)

    }

    const handlePasswordChange = e=>{
        setPassword(e.target.value)
    }
    const handleNameChange = e =>{
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange}
                    value={name}
                type="text" name="name" className="input input-bordered"/>
                <br />
                <input
                    onChange={handleEmailChange}
                
                type="email" name="email" className="input input-bordered" />
                <br />
                <input
                    onChange={handlePasswordChange}
                type="password" name="password" className="input input-bordered" required/>
                <br />
                <button className="btn">Submit</button>
                {
                    error && <p className="bg-red-400">{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;