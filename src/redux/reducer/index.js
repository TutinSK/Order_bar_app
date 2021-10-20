import { combineReducers } from "redux";
import cartItem from "./cartitem"
const rootReducer =combineReducers({
    cartItem:cartItem
})
export default rootReducer