/**
 * @author prajwalmr62
 * action creators for contact management
 */

 // action list imports
import actionTypes from "../actionTypes";

/**
 * change contact's association with user
 * @param {string} contactId contact Id to be updated 
 * @param {*} associationType type of association with user
 */
export function changeContactAssociation(contactId, associationType){

    return {
        type: actionTypes.contacts.CHANGE_ASSOCIATION,
        contactId,
        associationType,
    }
}

/**
 * get user's contact list from service. This action has side-effects.
 * @param {dispatch} dispatch redux dispatch method 
 * @param {history} history react router history API 
 * @param {string} username user name 
 * @param {string} accountSource from which account to be fetched. 
 */
export async function fetchUserContacts(dispatch, history, username, accountSource){
    dispatch({
        type: actionTypes.contacts.GET_CONTACTS.REQUEST
    });
    fetch('https://my.api.mockaroo.com/user_contact_import.json?key=6a969fd0').then( async (response)=>{
        response.json().then(async data=> {
            const allContacts = data;
            await dispatch({
                type: actionTypes.contacts.GET_CONTACTS.SUCCESS,
                allContacts,
            });
            history.push({
                pathname:'/manage'
            })
        });
        
    });
}