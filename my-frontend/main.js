document.getElementById('fetchBtn').addEventListener('click', async () => {
    const responseDiv = document.getElementById('response');
    responseDiv.innerText = "Connecting to backend API...";
    responseDiv.style.color = "#007bff";

    try {
        // We look out to our laptop's localhost port 5000 where our python backend is mapped
        const res = await fetch('http://localhost:5000/api/data');
        const data = await res.json();
        
        responseDiv.innerHTML = `
        <strong>Backend Message:</strong> ${data.message}<br>
        <strong>Database Status:</strong> ${data.database_status}
        `;
        responseDiv.style.color = "#28a745";
    } catch (error) {
        responseDiv.innerText = "Error: Could not reach the backend API. Make sure your python container is running!";
        responseDiv.style.color = "#dc3545";
        console.error(error);
    }
});
