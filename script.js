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
            div.className = `product-card bg-amber-50 p-4 rounded shadow text-gray mb-4 w-full border-style-solid border-black  ${index % 2 === 0 ? 'mr-30px' : 'ml-30px'}`; // Alternate alignment
            
            // Create the inner HTML for the card
            div.innerHTML = `
        <h2 class="font-bold">ID: ${breed.id}</h2>
                <p><strong>Type:</strong> ${breed.type}</p>
                <p><strong>Name:</strong> ${breed.attributes.name}</p>
                <p><strong>Description:</strong> ${breed.attributes.description}</p>
                <p><strong>Life Expectancy:</strong> ${breed.attributes.life.min} - ${breed.attributes.life.max} years</p>
                <p><strong>Male Weight:</strong> ${breed.attributes.male_weight.min} - ${breed.attributes.male_weight.max} kg</p>
                <p><strong>Female Weight:</strong> ${breed.attributes.female_weight.min} - ${breed.attributes.female_weight.max} kg</p>
                <p><strong>Hypoallergenic:</strong> ${breed.attributes.hypoallergenic}</p>
                <p class="relationships"><strong>Group ID:</strong> ${breed.relationships.group.data.id}</p>
                <p class="relationships"><strong>Group type:</strong> ${breed.relationships.group.data.type}</p>
    
`;


            // Append the card to the Dog Breeds section
            document.getElementById("dog-breeds").append(div);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function to load the dog breeds
fetchData();
