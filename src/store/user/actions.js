/**
 * @author prajwalmr62
 * user actions creators.
 */

// action list imports
import actionTypes from "../actionTypes";


/**
 * creates user login action
 * @param {string} username user's registered id
 * @param {string} firstName user's first name
 * @param {string} lastName user's last name
 * @param {string} accountType user's registered account type.
 */
export function userLogin(username, firstName, lastName, accountType){
    return {
        type : actionTypes.UserProfile.USER_LOGIN,
        username,
        firstName,
        lastName,
        accountType
    }
}

/**
 * creates user logout action.
 */
export function userLogout(){
    return {
        type : actionTypes.UserProfile.USER_LOGOUT
    }
}

/**
 * if user's details have to be updated, this action needs to be
 * called for update.
 * @param {string} firstName updated first name
 * @param {string} lastName updated last name
 */
export function userUpdate(firstName, lastName){
    return{
        type: actionTypes.UserProfile.USER_PROFILE_UPDATE,
        firstName,
        lastName
        
    }
}