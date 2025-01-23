import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../Component/Hero";
import Footer from "../Component/footer";

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [images, setImages] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();

        // Store all dog breeds
        setDogs(data);

        // Fetch images for each breed
        const imageRequests = data.map((breed) =>
          breed.reference_image_id
            ? fetch(
                `https://api.thedogapi.com/v1/images/${breed.reference_image_id}`
              ).then((res) => res.json())
            : Promise.resolve({
                id: null,
                url: "https://via.placeholder.com/150",
              })
        );
        const imagesData = await Promise.all(imageRequests);
        const imagesMap = imagesData.reduce((acc, image) => {
          if (image.id) {
            acc[image.id] = image.url;
          }
          return acc;
        }, {});
        setImages(imagesMap);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogData();
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter dogs based on search query
  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(searchQuery)
  );

  // Calculate start and end index for pagination
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedDogs = filteredDogs.slice(startIndex, endIndex);

  // Handle page navigation
  const handleNextPage = () => {
    if (endIndex < filteredDogs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Hero />
      {!dogs.length ? (
        <h1 className=" flex items-center justify-center text-slate-800 text-center px-5 text-3xl h-screen">
          Loading...
        </h1>
      ) : (
        <section className="p-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className=" mt-10 flex items-center justify-center text-pink-500 text-center px-5 text-2xl lg:text-3xl font-montserrat  ">
              BarkHub App
            </h1>

            <form
              className="max-w-xl mx-auto "
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a breed"
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-pink-500 py-3 rounded mt-10 shadow w-full placeholder-padding"
              />
            </form>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
            {paginatedDogs.map((dog) => (
              <Link
                to={`/dog/${dog.name}`}
                key={dog.id}
                className="group relative overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <article className="mb-8">
                  <img
                    src={
                      images[dog.reference_image_id] ||
                      "https://via.placeholder.com/150"
                    }
                    alt={dog.name}
                    className=" md:h-72 w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    {" "}
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0 translate-y-[60%]">
                    <h2 className="text-white text-lg font-semibold mt-8 ">
                      {dog.name}
                    </h2>
                    <p className="text-slate-400 mt-2">{dog.temperament}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="flex justify-between my-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-500-dark disabled:opacity-50"
            >
              &lt; Prev
            </button>
            <button
              onClick={handleNextPage}
              disabled={endIndex >= filteredDogs.length}
              className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-500-dark disabled:opacity-50"
            >
              Next &gt;
            </button>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
