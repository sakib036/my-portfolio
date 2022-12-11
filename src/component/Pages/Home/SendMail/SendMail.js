import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const SendMail = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_thkzae5', 'template_snzat7c', form.current, 'jTfKcrCaav9qVoBXM')
        .then((result) => {
            console.log(result.text);
            toast(
                "Mail Send Successfully.",
          
                {
                    style: {
                        border: "1px solid green",
                        padding: "16px",
                        color: "green",
                    },
                }
            );
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='my-12'>
            <div>
            
                <div className="hero bg-base-200">
                
                    <div className="hero-content grid grid-cols-1 sm:grid-cols-2">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Send Mail now!</h1>
                            <p className="py-6">Whenever you have a question about features, trials, need a demo, any feedback, improve anything or anything else. Please Send Me a Message in details. Your feedback is very important to me. </p>
                        </div>
                        <div className="card w-full shadow-2xl bg-base-100">
                            <form ref={form} onSubmit={sendEmail} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="user_name" placeholder="Name" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="user_email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" name="user_subject" placeholder="Subject" className="input input-bordered" required />
                                    <label className="label">

                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Message</span>
                                       
                                    </label>
                                    <textarea className="textarea textarea-bordered h-24" name="message" placeholder="Your Message" required></textarea>
                                    <label className="label">
                                        
                                    </label>
                                </div>
                                
                                <input className='btn btn-primary' type="submit" defaultValue='send' />
                                
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SendMail;