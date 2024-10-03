const API = "https://dogapi.dog/api/v2/breeds";

// Function to fetch dog breed data
async function fetchData() {
    try {
        // Fetch data from the API
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log(data?.data); // Log the data for debugging

        // Append Dog breeds to the page
        data.data.forEach((breed, index) => {
            const div = document.createElement("div");
            div.className = `product-card bg-slate-100 p-4 rounded shadow text-gray mb-4 w-full border-style-solid border-black  ${index % 2 === 0 ? 'mr-30px' : 'ml-30px'}`; // Alternate alignment
            
            // Create the inner HTML for the card
            div.innerHTML = `
                <h2 class="font-bold">ID: ${breed.id}</h2>
                <p><strong>Type:</strong> ${breed.type}</p>
                <p><strong>Name:</strong> ${breed.attributes.name}</p>
                <p><strong>Description:</strong> ${breed.attributes.description}</p>
            `; // Display id, type, name, description, and image

            // Append the card to the Dog Breeds section
            document.getElementById("dog-breeds").append(div);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function to load the dog breeds
fetchData();
