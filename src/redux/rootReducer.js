import {combineReducers} from "redux"
import { getDateReducer } from "./getDateReducer"
import {authReducer} from './authReducer'

export const RootReducer = combineReducers({getDateReducer, authReducer})