import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";


export const fetchCampers = createAsyncThunk(
    "campers/fetchAll",
    async ({page = 1, limit = 4, filters = {}}, thunkAPI) => {
        try {
            const response = await axios.get("/campers", {
                params: {
                    page,
                    limit,
                    ...filters,
                },
            });


            return {
                items: response.data.items,
                total: response.data.total,
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