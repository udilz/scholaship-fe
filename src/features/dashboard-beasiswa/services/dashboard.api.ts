import { IScholarship } from "../types/scholarship.types";

export async function addBeasiswa({name, description, country, city, email, url_web, degrees, major, funding_type, open_date, close_date} : IScholarship) {
    try {
        const res = await fetch('http://localhost:8000/api/v1/scholarships', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ name, description, country, city, email, url_web, degrees, major, funding_type, open_date, close_date })
        });

        if (!res.ok) {
            throw new Error(`Server Error: ${res.status}`);
        }

        const response = await res.json();
        console.log(response.data);
        return response;
    } catch (error) {
        console.error('Error adding scholarship:', error); 
        throw error;  
    }
}

export async function getBeasiswa() {
    try {
        const res = await fetch('http://localhost:8000/api/v1/scholarships')

        if (!res.ok) {
            throw new Error(`Server Error: ${res.status}`);
        }

        const response = await res.json();
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error adding scholarship:', error); 
        throw error;  
    }
}

export async function  deleteBeasiswa(id: string) {
    try {
        const res = await fetch(`http://localhost:8000/api/v1/scholarships/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });

        if (!res.ok) {
            throw new Error(`Server Error: ${res.status}`);
        }

        const response = await res.json();
        console.log(response.data);
        return response.message;
    } catch (error) {
        console.error('Error adding scholarship:', error); 
        throw error;  
    } 
}

export async function updateBeasiswa(id: string, {name, description, country, city, email, url_web, degrees, major, funding_type, open_date, close_date} : IScholarship) {
    try {
        const res = await fetch(`http://localhost:8000/api/v1/scholarships/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ name, description, country, city, email, url_web, degrees, major, funding_type, open_date, close_date })
        });

        if (!res.ok) {
            throw new Error(`Server Error: ${res.status}`);
        }

        const response = await res.json();
        console.log(response.data);
        return response;
    } catch (error) {
        console.error('Error adding scholarship:', error); 
        throw error;  
    }
}