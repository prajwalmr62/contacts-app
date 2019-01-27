/**
 * @author prajwalmr62
 * reducers for user actions.
 */

// action and initial state import
import actionTypes from "../actionTypes";
import initState from "../initState";

/**
 * base user reducer. 
 * @param {Object} state user state.
 * @param {Action} action called action
 */
export default function(state, action){

    if(action.type=== actionTypes.UserProfile.USER_LOGIN){
        const { username, accountType, firstName, lastName } = action;
        return Object.assign({}, state, {
            username,
            accountType,
            firstName,
            lastName
        })
    }

    else if(action.type === actionTypes.UserProfile.USER_PROFILE_UPDATE){
        const { firstName, lastName } = action;
        return Object.assign({}, state, {
            firstName,
            lastName
        });
    }

    else if (action.type === actionTypes.UserProfile.USER_LOGOUT || state === undefined){
        return initState.user;
    }

    return state;
}