import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const  SingleDog = () => {
    const [dog, setDog] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        const fetchSingleDogData = async () => {
            try {
                // Fetch breed data based on the name
                const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
                const data = await res.json();
                
                if (data.length > 0) {
                    // Set dog data
                    const breed = data[0]; // Assuming the first result is the most relevant
                    setDog(breed);
                } else {
                    setDog(null);
                }
            } catch (error) {
                console.error(error);
                setDog(null);
            }
        };

        fetchSingleDogData();
    }, [name]);

    return (
        <>
            <section className="max-w-5xl mx-auto p-10 flex items-center justify-center h-screen">
                {dog ? (
                    <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center" >
                        <article>
                            {dog.reference_image_id ? (
                                <img 
                                    src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} 
                                    alt={dog.name} 
                                    className="w-full h-auto"
                                />
                            ) : (
                                <img 
                                    src="https://via.placeholder.com/600x400" 
                                    alt="Placeholder" 
                                    className="w-full h-auto"
                                />
                            )}
                        </article>
                        <article className="mt-4">
                            <h1 className="text-3xl font-bold text-white mb-8 lg:text-3xl">{dog.name}</h1>
                            {dog.description && <p className="mt-2 text-slate-400 mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed">{dog.description}</p>}
                            <ul className="text-sm text-white leading-loose lg:text-base lg:leading-relaxed">
                                <li><strong>Bred For:</strong> {dog.bred_for}</li>
                                <li><strong>Height:</strong> {dog.height.metric} cm</li>
                                <li><strong>Breed Group:</strong> {dog.breed_group}</li>
                                <li><strong>Weight:</strong> {dog.weight.metric} kg</li>
                                <li><strong>Lifespan:</strong> {dog.life_span}</li>
                                <li><strong>Temperament:</strong> {dog.temperament}</li>
                            </ul>
                            <Link to="/home" className="inline-block bg-pink-500 py-2 px-6 rounded mt-8 text-white hover:bg-slate-500 transition-all duration-200">&larr; Back</Link>
                        </article>
                    </div>
                ) : (
                    <h2 className="text-xl text-center">No dog found with the name "{name}"</h2>
                )}
            </section>
        </>
    );
}
export default SingleDog


