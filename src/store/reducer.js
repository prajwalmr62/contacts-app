/**
 * @author prajwalmr62
 * application reducers export file.
 */


// dependency imports
import { combineReducers } from "redux";

// reducers import
import contacts from "./contacts/reducer";
import user from "./user/reducer";

// combine reducers and export as single reducer.
export default combineReducers({
    contacts, 
    user
});