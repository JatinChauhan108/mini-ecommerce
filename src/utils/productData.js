async function getData() {
    const url = "https://dummyjson.com/products";
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result.products.slice(0, 20)
    } catch (error) {
        console.error(error.message);
    }
}

export default getData;