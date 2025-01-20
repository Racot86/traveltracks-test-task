import apiService from "./apiService";

// Fetch campers with pagination and filters
export const fetchCampers = async (params) => {
    try {
        const response = await apiService.get("/campers", { params });
        return response;
    } catch (error) {
        throw error;
    }
};

// Fetch a single camper by ID
export const fetchCamperById = async (id) => {
    try {
        const response = await apiService.get(`/campers/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
};

// Fetch locations
export const fetchLocations = async () => {
    try {
        const response = await apiService.get("/locations");
        return response;
    } catch (error) {
        throw error;
    }
};