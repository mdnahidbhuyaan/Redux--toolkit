import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:"search",
    initialState:{
        query:"",
        activeTab:"",
        result:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){

        },
        setActiveTab(state,action){

        },
             setLoading(state,action){
            
        },
            setResult(state,action){
            
        },
             setErron(state,action){
            
        }
    }
})