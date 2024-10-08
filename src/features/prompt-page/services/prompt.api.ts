interface IFilterScholarship {
    country?: string,
    major?: string,
    degrees?: string,
    funding_type?: string
}

export async function searchScholarship({country, major, degrees, funding_type} : IFilterScholarship) {
    try {
        const res = await fetch('http://localhost:8000/api/v1/scholarships/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ country, major, degrees, funding_type })
        });

        if (!res.ok) {
            throw new Error(`Server Error: ${res.status}`);
        }

        const response = await res.json();
        return response.data;
    } catch (error) {
        console.error('Error Fetch scholarship:', error); 
        throw error;  
    }
}