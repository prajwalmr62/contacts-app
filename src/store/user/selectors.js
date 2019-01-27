/**
 * @author prajwalmr62
 * selectors for user state.
 */

/**
 * get user's username
 * @param {Object} userState user state 
 */
export const getUserName = (userState) => userState.username;

/**
 * get user's first name
 * @param {Object} state user state
 */
export const getFirstName = (state) => {
    return state.firstName;
}

/**
 * get user object
 * @param {Object} state user object
 */
export const getUser = state => state;