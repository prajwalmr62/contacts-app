/**
 * @author prajwalmr62
 * available action types
 */

/**
 * exports all the available action types.
 */
export default {
    
    /**
     * related to user login process.
     */
    UserProfile : {
        USER_LOGIN: "user/USER_LOGIN",
        USER_LOGOUT: "user/LOGOUT",
        USER_PROFILE_UPDATE: "user/PROFILE_UPDATE"
    },

    /**
     * related to contacts managements, like import, modify etc.
     */
    contacts : {
        GET_CONTACTS: {
            REQUEST: "contacts/REQUEST_CONTACTS",
            SUCCESS: "contacts/SUCCESS",
            FAILURE: "contacts/FAILURE"
        },
        CHANGE_ASSOCIATION : "contacts/CHANGE_ASSOCIATION",
    }
}