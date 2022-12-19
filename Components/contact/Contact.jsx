import axios from 'axios';
import React, { useState } from 'react';
import contact from './contact.module.css';


const Contact = () => {
    const [form,setForm] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    })

    const handleOnChange = (e) => {
        const newForm = {...form}
        newForm[e.target.name] = e.target.value;
        setForm(newForm)
    }

    const onhandleSubmit = (e) =>{
        e.preventDefault()
        axios({
            method: 'post',
            url: 'api/send',
            data: {form}
       }).then(function (res) {
          
      })
      e.target.reset()
    }
    return (
        <div className={contact.contact}>
            <div className="container">
                <div className={contact.title}>
                    <span>Contact</span>
                    <h1>Get in Touch</h1>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul>
                            <li className='text-center'>
                                <i class="fa-solid fa-phone"></i>
                                 <div>
                                    <p>Call Me On</p>
                                    <span className='ms-2'>00 (958) 9865 562</span>
                                 </div>
                            </li>
                            <li className='text-center'>
                                <i class="fa-solid fa-envelope"></i>
                                 <div>
                                    <p>Email Me On</p>
                                    <span className='ms-2'>hafez.risad@gmail.com</span>
                                 </div>
                            </li>
                            <li className='text-center'>
                                <i class="fa-solid fa-house"></i>
                                 <div>
                                    <p>Visit Office</p>
                                    <span className='ms-2'>Mirpur 1 Shavar Dhaka Bangladaesh</span>
                                 </div>
                            </li>
                        </ul>
                        {/*-- form --*/}
                        <form onSubmit={onhandleSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Your Name</label>
                                <input class="form-control px-3" name="name" type="text" onChange={handleOnChange} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Your Subject</label>
                                <input class="form-control px-3" name="subject"type="text" onChange={handleOnChange} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control px-3" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnChange} />
                            </div>

                            <div class="mb-3">
                                <label for="message" class="form-label">Your Message</label>
                                <textarea class="form-control px-3" placeholder="" name="message" id="floatingTextarea2" style={{ height: "150px" }} onChange={handleOnChange} ></textarea>
                            </div>
                             <div className="text-center">
                               <button class="button">Send Message</button>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;



                        