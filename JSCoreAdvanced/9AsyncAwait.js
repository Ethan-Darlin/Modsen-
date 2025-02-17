async function fetchData(url) {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status}`); 
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Произошла ошибка при загрузке данных:", error);
        throw error; 
    }
}

const apiURL = "https://jsonplaceholder.typicode.com/posts"; 

fetchData(apiURL)
    .then(data => {
        console.log("Полученные данные:", data); 
    })
    .catch(error => {
        console.error("Не удалось загрузить данные:", error.message);
    });