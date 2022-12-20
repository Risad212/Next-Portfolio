import React, { useState } from 'react';
import formStyle from './form.module.css';

const Form = () => {
    const [formInfo, setForm] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    })

    const handleOnBlur = (e) => { 
        if(e.target.name === 'name'){
             if(isNaN(e.target.value)){
                 alert('ok it fine')
             }
             else{
                
             }

        }
    }
    const onhandleSubmit = (e) => {
        e.preventDefault()
        if(Object.keys(formInfo).length !== 0){
            axios({
                method: 'post',
                url: 'api/send',
                data: formInfo
            }).then((res) =>{
                console.log(res)
            })
            e.target.reset()
        }
    }
    return (
        <div className={formStyle.formContainer}>
            <form onSubmit={onhandleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Name</label>
                    <input class="form-control px-3" name="name" type="text" onBlur={handleOnBlur} required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Subject</label>
                    <input class="form-control px-3" name="subject" type="text" onBlur={handleOnBlur} required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control px-3" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={handleOnBlur} required />
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">Your Message</label>
                    <textarea class="form-control px-3" placeholder="" name="message" id="floatingTextarea2" style={{ height: "150px" }} onBlur={handleOnBlur} required />
                </div>
                <div className="text-center">
                    <button class="button">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default Form;