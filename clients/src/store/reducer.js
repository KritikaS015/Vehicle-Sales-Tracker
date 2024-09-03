import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars : []
}

export const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers : {
        getCars: (state) => {
                // get code
        }
    }
})

export const { getCars } = vehicleSlice.actions; 
export default vehicleSlice.reducer;