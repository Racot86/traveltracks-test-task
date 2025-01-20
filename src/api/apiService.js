import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

// Set the base URL for axios
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

// Fetch campers with pagination and filters
export const fetchCampers = createAsyncThunk(
    "campers/fetchAll",
    async ({page = 1, limit = 4, filters = {}}, thunkAPI) => {
        try {
            const response = await axios.get("/campers", {
                params: {
                    page,
                    limit,
                    ...filters, // Include any filters dynamically
                },
            });

            // Assume the API returns `items` and `total` in the response
            return {
                items: response.data.items, // The list of campers
                total: response.data.total, // Total number of campers
            };
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const fetchLocations = createAsyncThunk(
    "locations/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/campers");


            return response.data.items;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


// Fetch camper by ID
export const fetchCampersById = createAsyncThunk(
    "camper/fetchAll",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/campers/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);