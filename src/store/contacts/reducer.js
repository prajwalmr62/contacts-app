/**
 * @author prajwalmr62
 * contact reducers
 */

// required imports
import initState from "../initState";
import actionTypes from "../actionTypes";

/**
 * contact reducer
 * @param {Object} state contact state
 * @param {Action} action called action
 */
export default function(state, action){

    if(action.type === actionTypes.contacts.GET_CONTACTS.SUCCESS){
        const { allContacts } = action;

        return Object.assign({}, state, {
            allContacts,
            unidentifiedContactsCount: allContacts.filter(contact => !contact.association).length
        });
    }
    else if (action.type === actionTypes.contacts.CHANGE_ASSOCIATION){
        const { contactId, associationType} = action;
        const allContacts = [...state.allContacts];
        let contact = allContacts.find(contact => contact.id === contactId);
        contact.association = associationType;
        return Object.assign({}, state, {
            allContacts,
            unidentifiedContactsCount: allContacts.filter(contact => !contact.association).length
        })
    } else if(!state){
        return initState.contacts;
    }
    return state;
}