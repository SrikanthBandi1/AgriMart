import { configureStore } from "@reduxjs/toolkit";
import combreducers from '../actions/Action'
 export const Store=configureStore({
     reducer:{
         check:combreducers
     }
 })