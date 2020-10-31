import React, { useState } from 'react'

const Contact = () => {
    const [data , setData] = useState({
        fullName : '',
        phone : '',
        email : '',
        msg : ''
    });

    const formSubmit = (e) =>{
        e.preventDefault();
        alert
        (`my name is ${data.fullName} my Email address is ${data.email} my phone Number is ${data.phone} and my Message is ${data.msg}`);

    }
    const InputEvent = (e) =>{
        const {name , value} = e.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name] : value
            };
        }) 
    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Contact page</h1>
            </div>
            <div className='container contact_div'>
                <div className='col-md-6 col-10 mx-auto'>

                    <form onSubmit = {formSubmit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">FullName</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                name = 'fullName'
                                value = {data.fullName}
                                onChange = {InputEvent}
                            />
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name = 'email'
                                value = {data.email}
                                onChange = {InputEvent}
                             />
                            <label for="exampleInputEmail1">Phone</label>
                            <input type="Number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                name = 'phone'
                                value = {data.phone}
                                onChange = {InputEvent}
                            />
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                name = 'msg'
                                value = {data.msg}
                                onChange = {InputEvent}
                                ></textarea>
                            </div>
                        </div><br />
                        <div className='col-12'>
                            <button type="submit" className="btn btn-outline-primary">Submit form</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact
