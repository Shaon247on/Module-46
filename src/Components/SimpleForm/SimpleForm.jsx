const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log('form Submitted')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" className="input input-bordered"/>
                <br />
                <input type="email" name="email" className="input input-bordered" />
                <br />
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;