import { createSlice } from "@reduxjs/toolkit"

export const Counter = createSlice({
    name: 'Agrimart',
     initialState : {
        data: [],
       
    
    },
    reducers: {
        isUser: (state, action) => {
            state.data = action.payload
        }
    }
})
export const { isUser } = Counter.actions
export default Counter.reducer

