/*import React, { useState } from 'react';

import Hero from "./Hero"
import Footer from "./footer"


const ContactForm = () =>{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e0ed7a39-075e-4b05-a222-14e4494907dd");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        console.log("Form Data json:", json);

        try{
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: json
              });
          
              if (!res.success) {
                  const errorData = await res.json();  
                  console.error("Error response from API:", errorData);
                  return;
              }
              const data = await res.json();
                  if (data.success) {
                      console.log("Success", data);
                  } else {
                      console.error("Submission failed", data);
                  }
              } catch (error) {
                  console.error("Error submitting form", error);
              }
    
        
      };
    
    return(
        <>
            <Hero />
            <section id="contact" className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form onSubmit={onSubmit} className="space-y-8 border-2 border-pink-500 p-20 rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl text-center text-pink-500 dark:text-white">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-black dark:text-black sm:text-xl">
                Got a technical issue? Want to send feedback about a beta feature? Want to know more about
                <span className="text-pink-500"> BarkHub</span>? Let me know.
            </p>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input
                    type="email"
                    id="email"
                    name='email'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea
                    id="message"
                    name='message'
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-pink-500 rounded-full focus:ring-4 focus:ring-pink-300"
            >
                Submit
            </button>
        </form>
    </div>
</section>

            <Footer/>
        </>
    )
}
export default ContactForm
*/

import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import Hero from "./Hero"
import Footer from "./footer"

    const ContactForm = () => {
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e0ed7a39-075e-4b05-a222-14e4494907dd");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        console.log("Form Data json:", json);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const data = await res.json();
            if (data.success) {
                navigate('/success')
              
              
               
            } else {
                setMessage('Submission failed. Please try again.');
                setIsError(true);
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setMessage('An error occurred. Please try again later.');
            setIsError(true);
        }
    };

    return (
        <>
            <Hero />
            <section id="contact" className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    {message && (
                        <div className={`mb-4 text-center ${isError ? 'text-red-500' : 'text-green-500'}`}>
                            {message}
                        </div>
                    )}
                    <form onSubmit={onSubmit} className="space-y-8 border-2 border-pink-500 p-20 rounded-lg shadow-md">
                        <h2 className="mb-4 text-2xl text-center text-pink-500 dark:text-white">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-black dark:text-black sm:text-xl">
                            Got a technical issue? Want to send feedback about a beta feature? Want to know more about
                            <span className="text-pink-500"> BarkHub</span>? Let me know.
                        </p>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com "
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea
                                id="message"
                                name='message'
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-2 text-white bg-pink-500 rounded-full focus:ring-4 focus:ring-pink-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default ContactForm;