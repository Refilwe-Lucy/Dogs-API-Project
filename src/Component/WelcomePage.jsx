import React from 'react';
import { Link } from 'react-router-dom';
//import Hero from './Hero';

export default function WelcomePage() {
    return (
        <>
    
        <section className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
            >
                <source src="/images/cute_dog.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Dogs Page</h1>
                <p className="mb-10 text-2xl">Explore different dog breeds and find your favorite one!</p>
                <Link to="/home">
                    <button className="px-4 py-4 bg-pink-500 text-white rounded hover:bg-pink-800">
                        Search for a Dog
                    </button>
                </Link>
            </div>
        </section>
        </>
    );
}




