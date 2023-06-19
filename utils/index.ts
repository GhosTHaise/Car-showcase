
export async function fetchCars(){
    const headers = {
		'X-RapidAPI-Key': 'b10adcce97msh9638a9ae81 2c8aep106842jsn5c5e7b510b95',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        {
            method : "GET",
            headers
        }
    );

    const result = await response.json();
    return result;
}