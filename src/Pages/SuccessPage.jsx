import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { AiOutlineCheck } from "react-icons/ai";
import Hero from '../Component/Hero';
import Footer from '../Component/footer';


const SuccessPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/contact'); 
    };

    return (
        <>
        <Hero/>
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <div className="flex items-center justify-center w-20 h-20 border-2 border-pink-500 rounded-full text-black mb-4 animate-bounce-up-down">
            <AiOutlineCheck className="w-10 h-10 px-2 py-2" />
            </div>
            
            <h1 className="text-2xl font-semibold">Form submitted successfully!</h1>
            <p className="mt-4 text-center text-gray-700">
                Thank you! The form has been submitted successfully. We will reply to you soon.
            </p>
            <button
                onClick={handleBack}
                className="mt-6 px-6 py-2 text-white bg-pink-500 rounded-full focus:ring-4 focus:ring-pink-300"
            >
                Back
            </button>
        </div>
        <Footer/>
        </>
    );
};

export default SuccessPage;
