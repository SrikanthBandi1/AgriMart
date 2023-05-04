import { createSlice } from "@reduxjs/toolkit"

export const Counter = createSlice({
    name: 'Agrimart',
     initialState : {
        data: [],
        response:[],
        code:[],
        name:[],
        userId:[],
        email:[],
        password:[],
        productid:[]
       
    
    },
    reducers: {
        isUser: (state, action) => {
            state.data = action.payload
        },
        status:(state,action)=>{
            state.response=action.payload
        },
        statuscode:(state,action)=>{
             state.code=action.payload
        },
        userName:(state,action)=>{
            state.name=action.payload
        },
        iduser:(state,action)=>{
            state.userId=action.payload
        },
        mail:(state,action)=>{
             state.email=action.payload
        },
        pwd:(state,action)=>{
            state.password=action.payload
        },
       idproduct:(state,action)=>{
        state.productid=action.payload
       }
       
    }
})
export const { isUser,status,statuscode,userName,iduser,mail,pwd,idproduct} = Counter.actions
export default Counter.reducer

